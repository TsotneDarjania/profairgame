export class Hover {
    element: Phaser.GameObjects.Sprite;
    hoverTexture: string;
    defaultTexture: string;
    constructor(data: {
        element: Phaser.GameObjects.Sprite;
        hoverTexture: string;
        defaultTexture: string;
    }) {
        const { element, hoverTexture, defaultTexture } = data;
        this.element = element;
        this.hoverTexture = hoverTexture;
        this.defaultTexture = defaultTexture;

        this.hover();
        this.default();
    }

    hover() {
        this.element.on("pointerover", () => {
            this.element.setFrame(this.hoverTexture);
        });
    }

    default() {
        this.element.on("pointerout", () => {
            this.element.setFrame(this.defaultTexture);
        });
    }
}
