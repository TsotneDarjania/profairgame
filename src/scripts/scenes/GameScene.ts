import Character  from "@/ui/Character";
import Background from "@/ui/Background";
import { deviceConfig } from "../config/config";
import { CharactersEnum } from "@/data/characters";
import Stand from "@/ui/Stand";
import Wheel from "@/ui/wheel/Wheel";
import Arrow from "@/ui/Arrow";
import { SymbolNamesEnum } from "@/data/symbolNames";
import PopUp from "@/ui/popUp/PopUp";

export default class GameScene extends Phaser.Scene {
    private wheel: Wheel;
    private rotateBackground: Phaser.GameObjects.Rectangle;
    private rotateImage: Phaser.GameObjects.Image;
    private rotateText: Phaser.GameObjects.Text;

    constructor() {
        super("GameScene");
    }

    protected init() {
        console.log("init");
    }

    protected create() {
        this.addBackground();
        this.addCharacter(CharactersEnum.BOY);
        this.addStand();
        this.addWheel();
        this.addArrow();
        this.addPopup();
        this.addOrientationCheck();
    }

    private addBackground() {
        const { x, y, key, scale } = deviceConfig.gameScene.background;
        new Background(this, x, y, key, scale);
    }

    private addCharacter(character: CharactersEnum) {
        const { x, y, scale } = deviceConfig.gameScene.characterUI;
        new Character(this, x, y, character, scale);
    }

    private addStand() {
        const { x, y, scale, key } = deviceConfig.gameScene.wheelStand;
        new Stand(this, x, y, key, scale);
    }

    private addWheel() {
        this.wheel = new Wheel(this, deviceConfig.gameScene.wheelConfig);
    }

    private addArrow() {
        const { x, y, key, scale } = deviceConfig.gameScene.arrow;
        new Arrow(this, x, y, key, scale);
    }

    private spinWheel(degree: number, speed: number, symbol: SymbolNamesEnum) {
        this.wheel.spin(degree, speed, symbol);
    }

    private addPopup() {
        new PopUp(this, deviceConfig.popup)
            .on("buttonClicked", this.onConfirm, this)
            .on("arrowLeftClicked", this.onLeftArrowClick, this)
            .on("arrowRightClicked", this.onRightArrowClick, this);
    }

    private onConfirm() {
        console.log("confirmCallback");
        this.spinWheel(10, 10, SymbolNamesEnum.Samosa);
    }

    private onLeftArrowClick() {
        console.log("leftArrowCallback");
    }

    private onRightArrowClick() {
        console.log("rightArrowCallback");
    }

    private addOrientationCheck() {
        this.orientationChange(this.scale.orientation);
        this.scale.on("orientationchange", this.orientationChange, this);
    }

    private orientationChange(orientation: Phaser.Scale.Orientation) {
        if(orientation === Phaser.Scale.Orientation.PORTRAIT) {
            this.showRotateScreen();
        }
        if(orientation === Phaser.Scale.Orientation.LANDSCAPE) {
            this.hideRotateScreen();
        }
    }

    private showRotateScreen() {
        const {background, image, text} = deviceConfig.rotateScreen;
        this.rotateBackground = this.add
            .rectangle(
                background.x,
                background.y,
                background.width,
                background.height,
                background.color,
            )
            .setOrigin(...background.origin);

        this.rotateImage = this.add.image(image.x, image.y, image.key)
        .setScale(image.scale);
        this.rotateText = this.add.text(text.x, text.y, text.text, text.style).setOrigin(...text.origin);
    }

    private hideRotateScreen() {
        this.rotateBackground?.destroy();
        this.rotateImage?.destroy();
        this.rotateText?.destroy();
    }
}