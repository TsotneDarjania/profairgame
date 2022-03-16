import "phaser";
import device from "current-device";
import UIPlugin from "phaser3-rex-plugins/dist/rexuiplugin.min.js";
import PerspectiveImagePlugin from "phaser3-rex-plugins/plugins/perspectiveimage-plugin.js";
import deviceProps from "./layoutConfig";
import "phaser/plugins/spine/dist/SpinePlugin";
import { IDevice } from "src/declarations/game/ILayoutConfig";

export const deviceConfig: IDevice = device.type === "desktop" ? deviceProps.desktop : deviceProps.mobile;
console.log(device.type)
const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: document.querySelector(".wrapper") as HTMLElement,
        width: deviceConfig.sizeCanvas.width,
        height: deviceConfig.sizeCanvas.height,
    },
    transparent: true,
    plugins: {
        scene: [
            {
                key: "rexUI",
                plugin: UIPlugin,
                mapping: "rexUI",
            },
            {
                key: "SpinePlugin",
                plugin: window.SpinePlugin,
                mapping: "spine",
            },
        ],
        global: [
            {
                key: "rexPerspectiveImagePlugin",
                plugin: PerspectiveImagePlugin,
                start: true,
            },
        ],
    },
};
export default config;
