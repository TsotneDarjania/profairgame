export interface IWheelConfig {
    x: number;
    y: number;
    sectors: {
        x: number;
        y: number;
        key: string;
    };
    center: {
        x: number;
        y: number;
        key: string;
    }
    symbols: Array<{x: number; y: number; key: string; angle: number; scale: number; scaleFix: number; }>;
    scale: number;
}