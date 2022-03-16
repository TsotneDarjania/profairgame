import { IPopUpConfig } from "src/declarations/popUp/IPopUpConfig";
import PopUpArrow from "./PopUpArrow";
import PopUpBackground from "./PopUpBackground";
import PopUpButton from "./PopUpButton";
import PopUpText from "./PopUpText";

export default class PopUp extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene, config: IPopUpConfig) {
        super(scene, config.position.x, config.position.y);
        scene.add.existing(this);
        this.setScale(config.position.scale);

        const { arrowRight, arrowLeft, background, button, text, title } = config;
        this.addBackground(background);
        this.addTitle(title);
        this.addText(text);
        this.addButton(button);
        this.addArrows(arrowLeft, arrowRight);
    }

    private addBackground({ x, y, scale, key }: IPopUpConfig["background"]) {
        this.add(new PopUpBackground(this.scene, x, y, key, scale));
    }

    private addTitle({ x, y, style, text, origin }: IPopUpConfig["title"]) {
        this.add(new PopUpText(this.scene, x, y, text, style, origin));
    }

    private addText({ x, y, style, text, origin }: IPopUpConfig["text"]) {
        this.add(new PopUpText(this.scene, x, y, text, style, origin));
    }

    private addButton({ x, y, scale, key }: IPopUpConfig["button"]) {
        const button = new PopUpButton(this.scene, x, y, key, scale);
        button.on("buttonClicked", () => {
            this.emit("buttonClicked");
            this.setVisible(false);
        });
        this.add(button);
    }

    private addArrows(
        { x, y, scale, key, flipX }: IPopUpConfig["arrowLeft"],
        { x: x2, y: y2, scale: scale2, key: key2, flipX: flipX2 }: IPopUpConfig["arrowRight"],
    ) {
        const leftArrow = new PopUpArrow(this.scene, x, y, key, scale, flipX);
        const rigthArrow = new PopUpArrow(this.scene, x2, y2, key2, scale2, flipX2);
        this.add([leftArrow, rigthArrow]);
        leftArrow.on("arrowClicked", () => {
            this.emit("arrowLeftClicked");
        });

        rigthArrow.on("arrowClicked", () => {
            this.emit("arrowRightClicked");
        });
    }

}