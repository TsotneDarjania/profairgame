import { IPopUpConfig } from "../popUp/IPopUpConfig";
import { IWheelConfig } from "./IWheelConfig";

export interface IDevice {
    desktop: boolean;
    sizeCanvas: { width: number; height: number };
    preloaderScene: {
        background: { x: number; y: number; scale: number };
        progressBar: { x: number; y: number; width: number; height: number };
        loaderLogo: { depth: number; scale: number };
        color: number;
    };
    popup: IPopUpConfig;
    rotateScreen: {
        background: {
            x: number;
            y: number;
            width: number;
            height: number;
            origin: [number, number];
            color: number;
        };
        image: {
            x: number;
            y: number;
            scale: number;
            key: string;
        };
        text: {
            x: number;
            y: number;
            text: string;
            style: Phaser.Types.GameObjects.Text.TextStyle;
            origin: [number, number];
        }
    }
    gameScene: {
        background: { x: number; y: number; scale: number; key: string };
        characterUI: { x: number; y: number; scale: number };
        wheelStand: { x: number; y: number; scale: number; key: string };
        arrow: { x: number; y: number; scale: number; key: string };
        wheelConfig: IWheelConfig;
    };
}

export interface ILayoutConfig {
    desktop: IDevice;
    mobile: IDevice;
}