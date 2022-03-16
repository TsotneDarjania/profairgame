export default class PopUpButton extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, scale: number) {
        super(scene, x, y, key);
        scene.add.existing(this);
        this.setScale(scale);
        this.setInteractive();
        this.addClickListener();
        this.addHoverListener();
    }

    private addClickListener() {
        this.on(
            Phaser.Input.Events.POINTER_DOWN,
            () => { this.emit("buttonClicked") },
            this,
        );
    }

    private addHoverListener() {
        this.on(
            Phaser.Input.Events.POINTER_OVER,
            this.scaleUp,
            this
        );

        this.on(
            Phaser.Input.Events.POINTER_OUT,
            this.scaleDown,
            this
        );
    }

    private scaleUp() {
        this.scene.tweens.add({
            targets: this,
            scale: 1.1,
            duration: 100,
        });
    }

    private scaleDown() {
        this.scene.tweens.add({
            targets: this,
            scale: 1,
            duration: 100
        });
    }
}