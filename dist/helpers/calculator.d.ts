declare function sum(a: number, b: number): number;
declare function subtract(a: number, b: number): number;
declare function multiply(a: number, b: number): number;
declare function divide(a: number, b: number): number;
declare const calculator: {
    sum: typeof sum;
    subtract: typeof subtract;
    multiply: typeof multiply;
    divide: typeof divide;
};
export { calculator };
