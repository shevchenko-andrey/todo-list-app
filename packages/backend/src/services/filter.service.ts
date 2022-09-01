import { ITodoQuery } from '../types/todo-params.type';
import { booleansParser } from '../utils/helpers/boolean-parser';

export default class FilterServise {
  getFilterParams(query: ITodoQuery) {
    const [isPublic, isCompleted] = booleansParser(query.public, query.compleated);

    return {
      title: { $regex: query.q ?? '' },
      isCompleted: isCompleted ?? false,
      isPublic: isPublic ?? true
    };
  }
}
