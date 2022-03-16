import { IWheelConfig } from "src/declarations/game/IWheelConfig";
import Center from "./Center";
import Sectors from "./Sectors";
import WheelSymbol from "./WheelSymbol";

export default class Wheel extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene, config: IWheelConfig) {
        super(scene, config.x, config.y);
        scene.add.existing(this);
        this.setScale(config.scale);
        this.addWheelUI(config);
    }

    private addWheelUI({ sectors, center, symbols }: IWheelConfig) {
        this.add(new Sectors(this.scene, sectors.x, sectors.y, sectors.key));
        this.add(new Center(this.scene, center.x, center.y, center.key));
        symbols.forEach(({ x, y, key, angle, scale, scaleFix }) => {
            this.add(new WheelSymbol(this.scene, x, y, key, angle, scale, scaleFix));
        });
    }

    public spin(degree: number, speed: number, symbol: string): void {
        this.scene.tweens.add({
            targets: this,
            angle: -(360 * speed + degree),
            ease: "Cubic.easeInOut",
            duration: 5000,
            onCompleteScope: this,
            onUpdateScope: this,
            onUpdate: () => {
                this.iterate((children: Phaser.GameObjects.Sprite) => {
                    if (children instanceof WheelSymbol) {
                        children.setAngle(-this.angle);
                    }
                });
            },
            onComplete: this.playAnimation,
            onCompleteParams: [symbol],
        });
    }

    private playAnimation(_tween: Phaser.Tweens.Tween, _target: Wheel[], symbol: string): void {
        this.iterate((children: WheelSymbol) => {
            if (children.name === symbol) {
                children.playAnimation();
            }
        }, this)
    }
}
