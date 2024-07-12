type T3DOject = {
    title: string;
    subTitle?: string;
    objectImage: string;
    id: string;
    objectTypeId: string;
    onParameterChanged: (values: any) => any;
};
declare const showDialogParameter: (object3D: T3DOject) => string;
declare const getListObject: () => T3DOject[];
export { getListObject, showDialogParameter };
