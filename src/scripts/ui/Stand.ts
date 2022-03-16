export default class Stand extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, scale: number) {
        super(scene, x, y, key);
        scene.add.existing(this);
        this.setScale(scale);
    }
}
