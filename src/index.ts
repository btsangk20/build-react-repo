import { v4 as uuidv4 } from 'uuid';
import { calculator } from './helpers/calculator';

type T3DOject = {
  title: string;
  subTitle?: string;
  objectImage: string;
  id: string;
  objectTypeId: string;
  onParameterChanged: (values: any) => any;
};

const RectWoodDeck: T3DOject = {
  id: uuidv4(),
  objectTypeId: 'WOOD_DECK',
  title: 'RectWoodDeck',
  objectImage: '/images/2d_deck.png',
  onParameterChanged: (values: any) => {
    const sum = calculator.sum(values.a, values.b);
    const divide = calculator.divide(values.a, values.b);
    const subtract = calculator.subtract(values.a, values.b);
    const multiply = calculator.multiply(values.a, values.b);

    console.log(sum, divide, subtract, multiply);

    return values;
  },
};

const LWoodDeck: T3DOject = {
  id: uuidv4(),
  objectTypeId: 'L_WOOD_DECK',
  title: 'LWoodDeck',
  objectImage: '/images/l_2d_deck.png',
  onParameterChanged: (values: any) => {
    const sum = calculator.sum(values.a, values.b);
    const divide = calculator.divide(values.a, values.b);
    const subtract = calculator.subtract(values.a, values.b);
    const multiply = calculator.multiply(values.a, values.b);

    console.log(sum, divide, subtract, multiply);
    return values;
  },
};

const showDialogParameter = (object3D: T3DOject) => {
  return 'Return dialogParameters';
};

const getListObject = () => {
  return [RectWoodDeck, LWoodDeck];
};

export { getListObject, showDialogParameter };
