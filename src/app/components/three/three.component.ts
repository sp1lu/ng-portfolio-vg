import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent {
  private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 10000);
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  private clock: THREE.Clock = new THREE.Clock();

  private amountX: number = 50;
  private amountY: number = 50;
  private particles: THREE.Points = new THREE.Points();
  private particlesNum: number = this.amountX * this.amountY;
  private positions: Float32Array = new Float32Array(this.particlesNum * 3);
  private count: number = 0;
  private separation: number = innerWidth / this.amountX;

  constructor(private el: ElementRef, private ngRenderer: Renderer2) { }

  public ngOnInit(): void {
    this.camera.position.set(250, 250, 1000);

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setClearColor(0x000000);

    this.ngRenderer.appendChild(this.el.nativeElement, this.renderer.domElement);

    this.initWaves();
    this.animate();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private initWaves(): void {
    let i: number = 0;

    for (let ix = 0; ix < this.amountX; ix++) {
      for (let iy = 0; iy < this.amountY; iy++) {
        this.positions[i] = ix * this.separation - (this.amountX * this.separation) / 2;
        this.positions[i + 1] = 0;
        this.positions[i + 2] = iy * this.separation - (this.amountY * this.separation) / 2;
        i += 3;
      }
    }

    let geometry: THREE.BufferGeometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    let material: THREE.PointsMaterial = new THREE.PointsMaterial({
      size: 5.1,
      opacity: 0.5,
      transparent: true,
      depthWrite: false,
      map: this.createCircleTexture('#ffe600', 256)
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private createCircleTexture(color: string, size: number): THREE.Texture {
    let matCanvas: HTMLCanvasElement = document.createElement('canvas');
    matCanvas.width = matCanvas.height = size;

    let matContext: CanvasRenderingContext2D | null = matCanvas.getContext('2d');
    let texture: THREE.Texture = new THREE.Texture(matCanvas);

    if (!matContext) return texture;

    let center: number = size / 2;

    matContext.beginPath();
    matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
    matContext.closePath();
    matContext.fillStyle = color;
    matContext.fill();

    texture.needsUpdate = true;

    return texture;
  }

  public ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private render = () => {
    this.camera.lookAt(this.scene.position);

    let positions: THREE.TypedArray = this.particles.geometry.attributes['position'].array;
    let i: number = 0
    let waveFrequency: number = 0.2;
    let waveLength: number = 0.5;
    let waveHeightFTB: number = 50;
    let waveHeightRTL: number = 50;

    for (let ix = 0; ix < this.amountX; ix++) {
      for (let iy = 0; iy < this.amountY; iy++) {
        positions[i + 1] =
          Math.sin((ix + this.count) * waveFrequency) * waveHeightRTL +
          Math.sin((iy + this.count) * waveLength) * waveHeightFTB;
        i += 3;
      }
    }
      this.particles.geometry.attributes['position'].needsUpdate = true;
      this.renderer.render(this.scene, this.camera);
      this.count += 0.025;
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.render();
  }

  private onWindowResize(): void {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.render(this.scene, this.camera);
  }
}
