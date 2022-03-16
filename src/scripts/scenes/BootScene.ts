export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("loadBackground", `sprites/Preloader/loaderBG.png`);
        this.load.image("loaderLogo", `sprites/Preloader/candy.png`);
    }

    create() {
        this.scene.start("PreloaderScene");
    }
}
