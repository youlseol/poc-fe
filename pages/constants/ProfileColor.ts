export interface ColorInfo {
    code: string;
    rgbaStart: string;
    rgbaEnd?: string;
    hex: string;
    textColor: string;
}
export const ProfileColor = {
    PURPLE: {
        code: 'purple',
        rgbaStart: 'rgba(104, 39, 110, 0)',
        hex: '#68276e',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR2: {
        code: 'purple',
        rgbaStart: 'rgba(59, 55, 88, 0)',
        hex: '#3b3758',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR3: {
        code: 'purple',
        rgbaStart: 'rgba(45, 75, 87, 0)',
        hex: '#2d4b57',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR4: {
        code: 'purple',
        rgbaStart: 'rgba(76, 115, 160, 0)',
        hex: '#4c73a0',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR5: {
        code: 'purple',
        rgbaStart: 'rgba(181, 156, 143, 1)',
        rgbaEnd: 'rgba(181, 156, 143, 0.01)',
        hex: '#b59c8f',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR6: {
        code: 'purple',
        rgbaStart: 'rgba(58, 79, 147, 0)',
        hex: '#3a4f93',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR7: {
        code: 'purple',
        rgbaStart: 'rgba(170, 83, 119, 0)',
        hex: '#aa5377',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR8: {
        code: 'purple',
        rgbaStart: 'rgba(172, 87, 92, 0)',
        hex: '#ac575c',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR9: {
        code: 'purple',
        rgbaStart: 'rgba(66, 66, 66, 0)',
        hex: '#424242',
        textColor: '#ffffff'
    } as ColorInfo,
    COLOR10: {
        code: 'purple',
        rgbaStart: 'rgba(247, 244, 250, 1)',
        hex: '#F7F4FA',
        textColor: '#ffffff'
    } as ColorInfo
};

export const ProfileColorList = [
    ProfileColor.PURPLE,
    ProfileColor.COLOR2,
    ProfileColor.COLOR3,
    ProfileColor.COLOR4,
    ProfileColor.COLOR5,
    ProfileColor.COLOR6,
    ProfileColor.COLOR7,
    ProfileColor.COLOR8,
    ProfileColor.COLOR9
];
