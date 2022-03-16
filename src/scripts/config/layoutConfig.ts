import { symbolNames } from "@/data/symbolNames";
import { generateSymbolPosition } from "@/helpers/helperFunctions";
import { ILayoutConfig } from "src/declarations/game/ILayoutConfig";

const resolutions = {
    desktop: {
        width: 1920,
        height: 1080
    },
    mobile: {
        width: 1920,
        height: 1080
    }
}

const radius: number = 220;
const offset: number = 180 / symbolNames.length;

const layoutConfig: ILayoutConfig = {
    desktop: {
        desktop: true,
        sizeCanvas: { ...resolutions.desktop },
        preloaderScene: {
            background: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
            },
            progressBar: { x: 712, y: 546, width: 500, height: 8 },
            loaderLogo: { depth: 2, scale: 1 },
            color: 0xf67f1f,
        },
        rotateScreen: {
            background: {
                x: 0,
                y: 0,
                width: resolutions.desktop.width,
                height: resolutions.desktop.height,
                origin: [0, 0],
                color: 0x000000,
            },
            image: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2 + 200,
                scale: 2,
                key: "rotateScreen",
            },
            text: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2 - 400,
                text: "Please, turn your device to horizontal orientation",
                style: {
                    fontSize: "70px",
                    fontFamily: "Scada",
                    color: "#ffffff",
                    fontStyle: "bold",
                },
                origin: [0.5, 0.5],
            },
        },
        popup: {
            position: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
            },
            background: { x: 0, y: 0, scale: 1, key: "popupBG" },
            title: {
                x: 0,
                y: -220,
                style: {
                    align: "center",
                    color: "rgb(136, 157, 245)",
                    fontFamily: "Arial",
                    fontSize: "80px",
                    fontStyle: "bold",
                    shadow: {
                        color: "rgba(48, 8, 95, 0.004)",
                        offsetX: 0,
                        offsetY: 1,
                        blur: 4,
                    },
                },
                text: "Game Guide",
                origin: 0.5,
            },
            text: {
                x: 0,
                y: 0,
                style: {
                    align: "left",
                    color: "rgb(225, 221, 230)",
                    fontFamily: "Arial",
                    fontSize: "35px",
                    fontStyle: "italic",
                },
                text: [
                    "Lorem Ipsum is simply dummy text of the printing",
                    " and typesetting industry. Lorem Ipsum has been",
                    "the industry's standard dummy text ever since the",
                    " Lorem Ipsum has been the industry's standard",
                    "  dummy text ever since the een the industry's",
                ],
                origin: [0.5, 0.5],
            },
            button: { x: 0, y: 240, scale: 1, key: "popupOk" },
            arrowLeft: { x: -450, y: 0, scale: 1, key: "popupArrow", flipX: true },
            arrowRight: { x: 450, y: 0, scale: 1, key: "popupArrow", flipX: false },
        },
        gameScene: {
            background: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
                key: "background",
            },
            characterUI: { x: 650, y: 550, scale: 0.85 },
            wheelStand: { x: 1100, y: 500, scale: 0.85, key: "stand" },
            arrow: { x: 1100, y: 188, key: "arrow", scale: 1 },
            wheelConfig: {
                x: 1100,
                y: 455,
                center: { x: 0, y: 0, key: "center" },
                sectors: { x: 0, y: 0, key: "sectors" },
                symbols: symbolNames.map((symbol: string, index: number, array: string[]) => ({
                    ...generateSymbolPosition(radius, index, 360 / array.length, offset),
                    key: symbol,
                    scale: 0.85,
                    scaleFix: 0.1,
                })),
                scale: 0.85,
            },
        },
    },
    mobile: {
        desktop: false,
        sizeCanvas: { ...resolutions.desktop },
        preloaderScene: {
            background: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
            },
            progressBar: { x: 712, y: 546, width: 500, height: 8 },
            loaderLogo: { depth: 2, scale: 1 },
            color: 0xf67f1f,
        },
        rotateScreen: {
            background: {
                x: 0,
                y: 0,
                width: resolutions.desktop.width,
                height: resolutions.desktop.height,
                origin: [0, 0],
                color: 0x000000,
            },
            image: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2 + 200,
                scale: 2,
                key: "rotateScreen",
            },
            text: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2 - 400,
                text: "Please, turn your device to horizontal orientation",
                style: {
                    fontSize: "70px",
                    fontFamily: "Scada",
                    color: "#ffffff",
                    fontStyle: "bold",
                },
                origin: [0.5, 0.5],
            },
        },
        popup: {
            position: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
            },
            background: { x: 0, y: 0, scale: 1, key: "popupBG" },
            title: {
                x: 0,
                y: -220,
                style: {
                    align: "center",
                    color: "rgb(136, 157, 245)",
                    fontFamily: "Arial",
                    fontSize: "60px",
                    fontStyle: "bold",
                    shadow: {
                        color: "rgba(48, 8, 95, 0.004)",
                        offsetX: 0,
                        offsetY: 1,
                        blur: 4,
                    },
                },
                text: "Game Guide",
                origin: 0.5,
            },
            text: {
                x: 0,
                y: 0,
                style: {
                    align: "left",
                    color: "rgb(225, 221, 230)",
                    fontFamily: "Arial",
                    fontSize: "35px",
                    fontStyle: "italic",
                },
                text: [
                    "Lorem Ipsum is simply dummy text of the printing",
                    " and typesetting industry. Lorem Ipsum has been",
                    "the industry's standard dummy text ever since the",
                    " Lorem Ipsum has been the industry's standard",
                    "  dummy text ever since the een the industry's",
                ],
                origin: [0.5, 0.5],
            },
            button: { x: 0, y: 240, scale: 1, key: "popupOk" },
            arrowLeft: { x: -450, y: 0, scale: 1, key: "popupArrow", flipX: true },
            arrowRight: { x: 450, y: 0, scale: 1, key: "popupArrow", flipX: false },
        },
        gameScene: {
            background: {
                x: resolutions.desktop.width / 2,
                y: resolutions.desktop.height / 2,
                scale: 1,
                key: "background",
            },
            characterUI: { x: 650, y: 550, scale: 0.85 },
            wheelStand: { x: 1100, y: 500, scale: 0.85, key: "stand" },
            arrow: { x: 1100, y: 188, key: "arrow", scale: 1 },
            wheelConfig: {
                x: 1100,
                y: 455,
                center: { x: 0, y: 0, key: "center" },
                sectors: { x: 0, y: 0, key: "sectors" },
                symbols: symbolNames.map((symbol: string, index: number, array: string[]) => ({
                    ...generateSymbolPosition(radius, index, 360 / array.length, offset),
                    key: symbol,
                    scale: 0.85,
                    scaleFix: 0.1,
                })),
                scale: 0.85,
            },
        },
    },
};

export default layoutConfig;
