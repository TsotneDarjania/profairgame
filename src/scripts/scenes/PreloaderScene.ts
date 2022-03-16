import { symbolNames } from "@/data/symbolNames";
import { deviceConfig } from "../config/config";

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super("PreloaderScene");
    }

    preload() {
        const loaderLogo = this.createProgressBar();
        this.loadRotateScreen();
        this.loadCharacters();
        this.loadPopupAssets();
        this.loadWheelAssets();
        this.loadGameBG();
        this.loadSpine();
        this.startProgressBar(loaderLogo);
    }

    createProgressBar(): Phaser.GameObjects.Sprite {
        const { progressBar, background, loaderLogo } = deviceConfig.preloaderScene;
        this.add.sprite(background.x, background.y, "loadBackground").setScale(background.scale);
        return this.add
            .sprite(progressBar.x, progressBar.y, "loaderLogo")
            .setVisible(false)
            .setDepth(loaderLogo.depth)
            .setScale(loaderLogo.scale);
    }

    loadRotateScreen() {
        this.load.image("rotateScreen", `sprites/rotateScreen.png`);
    }

    loadCharacters() {
        this.load.image("girl", `sprites/Character/Girl.png`);
        this.load.image("boy", `sprites/Character/Boy.png`);
    }

    loadPopupAssets() {
        this.load.image("popupBG", `sprites/popup/background.png`);
        this.load.image("popupOk", `sprites/popup/ok.png`);
        this.load.image("popupArrow", `sprites/popup/arrow.png`);
    }

    loadWheelAssets() {
        this.load.image("arrow", `sprites/Wheel/arrow.png`);
        this.load.image("center", `sprites/Wheel/center.png`);
        this.load.image("sectors", `sprites/Wheel/sectors.png`);
        this.load.image("stand", `sprites/Wheel/wheel.png`);
    }

    loadGameBG() {
        this.load.image("background", `sprites/gameBG.png`);
    }

    loadSpine() {
        const prefix = "sprites/Wheel/spine/";
        symbolNames.slice(1).forEach((symbol) => {
            this.load.image(symbol, `${prefix}${symbol}.png`);
            this.load.spine(
                `${symbol}_animation`,
                `${prefix}${symbol}.json`,
                `${prefix}${symbol}.atlas`,
                false,
            );
        });
    }

    startProgressBar(loaderLogo: Phaser.GameObjects.Sprite) {
        const { progressBar: barRes, color } = deviceConfig.preloaderScene;
        const progressBar: Phaser.GameObjects.Rectangle = this.add.rectangle(
            barRes.x,
            barRes.y,
            0,
            barRes.height,
            color,
        );
        loaderLogo.setVisible(true);

        this.load.on(
            "progress",
            (progress: number) => {
                const width = barRes.width * progress;
                loaderLogo.x = barRes.x + width;
                progressBar.width = width;
            },
            this,
        );
    }

    create() {
        this.time.delayedCall(
            1000,
            () => {
                this.scene.start("GameScene");
            },
            [],
            this,
        );
    }
}
