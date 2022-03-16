export default class PopUpText extends Phaser.GameObjects.Text {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        text: string | string[],
        style: Phaser.Types.GameObjects.Text.TextStyle,
        origin: number | number[],
    ) {
        super(scene, x, y, text, style);
        scene.add.existing(this);
        Array.isArray(origin) ? this.setOrigin(origin[0], origin[1]) : this.setOrigin(origin);
    }
}
