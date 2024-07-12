import { v4 as uuidv4 } from 'uuid';

import { MOCK_REC_WOOD_DECK, MOCK_L_WOOD_DECK } from './constants/index';

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
    console.log('onParameterChanged', values);

    return MOCK_REC_WOOD_DECK;
  },
};

const LWoodDeck: T3DOject = {
  id: uuidv4(),
  objectTypeId: 'L_WOOD_DECK',
  title: 'LWoodDeck',
  objectImage: '/images/l_2d_deck.png',
  onParameterChanged: (values: any) => {
    console.log('onParameterChanged', values);

    return MOCK_L_WOOD_DECK;
  },
};

const showDialogParameter = (object3D: T3DOject) => {
  console.log('showDialogParameter', object3D);

  return object3D;
};

const getListObject = () => {
  return [RectWoodDeck, LWoodDeck];
};

export { getListObject, showDialogParameter };
