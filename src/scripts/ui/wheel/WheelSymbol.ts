
export default class WheelSymbol extends Phaser.GameObjects.Sprite {
    symbol: SpineGameObject;
    scaleFix: number;
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, angle: number, scale: number, scaleFix: number) {
        super(scene, x, y, key);
        scene.add.existing(this);
        this.name = key;
        this.scaleFix = scaleFix;
        this.setAngle(angle);
        this.setScale(scale);
    }

    public playAnimation(): void {
        const { centerX, centerY } = this.getBounds();
        this.setVisible(false);
        this.symbol = this.scene.add.spine(
            centerX,
            centerY,
            this.texture.key + "_animation",
        );
        this.symbol.setScale(this.scale - this.scaleFix);
        
        const [animation]: string[] = this.symbol.getAnimationList();
        this.symbol.play(animation);
        
        this.symbol.on("complete", () => {
            this.setVisible(true);
            this.symbol.destroy();
        })
    }
}