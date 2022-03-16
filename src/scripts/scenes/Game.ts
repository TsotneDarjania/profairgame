import config from "../config/config";
import BootScene from "./BootScene";
import PreloaderScene from "./PreloaderScene";
import GameScene from "./GameScene";

export default class Game extends Phaser.Game {
    constructor() {
        super(config);

        this.scene.add("BootScene", BootScene);
        this.scene.add("PreloaderScene", PreloaderScene);
        this.scene.add("GameScene", GameScene);
        this.scene.start("BootScene");
    }
}
