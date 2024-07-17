export declare const MOCK_L_WOOD_DECK: {
    metadata: {
        version: number;
        type: string;
        generator: string;
    };
    geometries: ({
        uuid: string;
        type: string;
        shapes: string[];
        options: {
            depth: number;
            bevelEnabled: boolean;
        };
        width?: undefined;
        height?: undefined;
        depth?: undefined;
        widthSegments?: undefined;
        heightSegments?: undefined;
        depthSegments?: undefined;
    } | {
        uuid: string;
        type: string;
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
        shapes?: undefined;
        options?: undefined;
    })[];
    materials: ({
        uuid: string;
        type: string;
        color: number;
        blendColor: number;
        envMapRotation?: undefined;
        reflectivity?: undefined;
        refractionRatio?: undefined;
    } | {
        uuid: string;
        type: string;
        color: number;
        envMapRotation: (string | number)[];
        reflectivity: number;
        refractionRatio: number;
        blendColor: number;
    })[];
    shapes: {
        arcLengthDivisions: number;
        type: string;
        autoClose: boolean;
        curves: {
            metadata: {
                version: number;
                type: string;
                generator: string;
            };
            arcLengthDivisions: number;
            type: string;
            v1: number[];
            v2: number[];
        }[];
        currentPoint: number[];
        uuid: string;
        holes: never[];
    }[];
    object: {
        uuid: string;
        type: string;
        layers: number;
        matrix: number[];
        up: number[];
        children: {
            uuid: string;
            type: string;
            layers: number;
            matrix: number[];
            up: number[];
            children: ({
                uuid: string;
                type: string;
                layers: number;
                matrix: number[];
                up: number[];
                children?: undefined;
            } | {
                uuid: string;
                type: string;
                layers: number;
                matrix: number[];
                up: number[];
                children: {
                    uuid: string;
                    type: string;
                    layers: number;
                    matrix: number[];
                    up: number[];
                    children: {
                        uuid: string;
                        type: string;
                        layers: number;
                        matrix: number[];
                        up: number[];
                        geometry: string;
                        material: string;
                    }[];
                }[];
            })[];
        }[];
        backgroundRotation: (string | number)[];
        environmentRotation: (string | number)[];
    };
};
export declare const MOCK_REC_WOOD_DECK: {
    metadata: {
        version: number;
        type: string;
        generator: string;
    };
    geometries: ({
        uuid: string;
        type: string;
        shapes: string[];
        options: {
            depth: number;
            bevelEnabled: boolean;
        };
        width?: undefined;
        height?: undefined;
        depth?: undefined;
        widthSegments?: undefined;
        heightSegments?: undefined;
        depthSegments?: undefined;
    } | {
        uuid: string;
        type: string;
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
        shapes?: undefined;
        options?: undefined;
    })[];
    materials: ({
        uuid: string;
        type: string;
        color: number;
        blendColor: number;
        envMapRotation?: undefined;
        reflectivity?: undefined;
        refractionRatio?: undefined;
    } | {
        uuid: string;
        type: string;
        color: number;
        envMapRotation: (string | number)[];
        reflectivity: number;
        refractionRatio: number;
        blendColor: number;
    })[];
    shapes: {
        arcLengthDivisions: number;
        type: string;
        autoClose: boolean;
        curves: {
            metadata: {
                version: number;
                type: string;
                generator: string;
            };
            arcLengthDivisions: number;
            type: string;
            v1: number[];
            v2: number[];
        }[];
        currentPoint: number[];
        uuid: string;
        holes: never[];
    }[];
    object: {
        uuid: string;
        type: string;
        layers: number;
        matrix: number[];
        up: number[];
        children: {
            uuid: string;
            type: string;
            layers: number;
            matrix: number[];
            up: number[];
            children: {
                uuid: string;
                type: string;
                layers: number;
                matrix: number[];
                up: number[];
                children: {
                    uuid: string;
                    type: string;
                    layers: number;
                    matrix: number[];
                    up: number[];
                    children: {
                        uuid: string;
                        type: string;
                        layers: number;
                        matrix: number[];
                        up: number[];
                        geometry: string;
                        material: string;
                    }[];
                }[];
            }[];
        }[];
        backgroundRotation: (string | number)[];
        environmentRotation: (string | number)[];
    };
};
