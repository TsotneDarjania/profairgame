// returns style object for Phaser.text object
export const textStyles = (
    fontFamily: string,
    fontSize: number | undefined,
    fixedWidth: number,
    align: "center" | "left" | "right" | undefined,
    color: string = "#000000",
) => {
    return {
        fontFamily,
        fontSize: fontSize?.toString() + "px",
        fixedWidth,
        align,
        color,
    };
};

const degToRad = (deg: number) => deg * (Math.PI / 180);

// prefixes 0 to a number below 10. for time module.
export const addZero = (num: number) => num.toString().padStart(2, "0");

export const generateSymbolPosition = (
    radius: number,
    i: number,
    angle: number,
    offset: number
) => {
    const x = Math.cos(degToRad(i * angle) + degToRad(offset)) * radius;
    const y = Math.sin((i * angle * Math.PI) / 180 + (offset * Math.PI) / 180 ) * radius;
    return { x, y, angle: 0 };
};




