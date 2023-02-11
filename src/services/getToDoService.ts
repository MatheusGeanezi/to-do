import { getAllToDosRepository, getOneToDosRepository } from '../repository/toDoRepository';

export const getAllTodoService = async () => {
    const find = await getAllToDosRepository();
    if(find){
        return await getAllToDosRepository();
    }else{
        return 'Não há dados';
    }
};

export const getOneTodoService = async (_id: string) => {
    const find = await getOneToDosRepository(_id);
    if(find){
        return await getOneToDosRepository(_id);
    }else{
        return 'Não há dados';
    }
};