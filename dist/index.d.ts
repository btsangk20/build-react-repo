type T3DOject = {
    title: string;
    subTitle?: string;
    objectImage: string;
    id: string;
    objectTypeId: string;
    onParameterChanged: (values: any) => any;
};
declare const showDialogParameter: (object3D: T3DOject) => T3DOject;
declare const getListObject: () => T3DOject[];
declare const drawScene: () => void;
export { getListObject, showDialogParameter, drawScene };
