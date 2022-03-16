export interface IPopUpConfig {
    position: { x: number; y: number; scale: number };
    background: { x: number; y: number; scale: number; key: string };
    title: { x: number; y: number; style: Phaser.Types.GameObjects.Text.TextStyle; text: string | string[]; origin: number | number[]; };
    text: { x: number; y: number; style: Phaser.Types.GameObjects.Text.TextStyle; text: string | string[]; origin: number | number[]; };
    button: { x: number; y: number; scale: number; key: string };
    arrowLeft: { x: number; y: number; scale: number; key: string; flipX: boolean };
    arrowRight: { x: number; y: number; scale: number; key: string; flipX: boolean };
}