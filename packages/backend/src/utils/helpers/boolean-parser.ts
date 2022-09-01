import { IBooleanString } from '../../types/todo-params.type';

export const booleansParser = (...booleans: IBooleanString[]) =>
  booleans.map((booleanString) => {
    const normalizedBooleanString = `${booleanString}`.toLocaleLowerCase().trim();
    switch (normalizedBooleanString) {
      case 'true':
        return true;

      case 'false':
        return false;

      default:
        return null;
    }
  });
