import { IToDo } from '../interfaces/Itodo';
import { postToDosRepository } from '../repository/toDoRepository';


export const createTodoService = async (body: IToDo) => {
    if (body.title) {
        return await postToDosRepository(body)
    } else {
        return 'Titulo obrigatorio'
    }
}
