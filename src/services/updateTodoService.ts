import { IToDo } from '../interfaces/Itodo';
import { updateToDosRepository } from '../repository/toDoRepository';

export const updateToDoService = async (body: IToDo) => {
    if (body.id) {
        return await updateToDosRepository(body.id,body);
    } else {
        return 'Não foi possivel atualizar o card';
    }
};

export const updateStatusToDoService = async (body: IToDo) => {
    if (body.id) {
        return await updateToDosRepository(body.id,body);
    } else {
        return 'Não foi possivel atualizar o status';
    }
};