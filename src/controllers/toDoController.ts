import { Request, Response } from 'express';
import { getAllTodoService, getOneTodoService } from '../services/getToDoService';
import { createTodoService } from '../services/postToDoService';
import { updateToDoService } from '../services/updateTodoService';

export const getAll = async (req: Request, res: Response) => {
    try {
        const data = await getAllTodoService();
        res.json({ status: 200, data });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }

};

export const createTodo = async (req: Request, res: Response) => {
    try {
        const data = await createTodoService(req.body);
        res.json({ status: 200, message: 'Cadastrado com sucesso', data });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        res.json({ status: 200, message: 'Atualizado com sucesso' });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }

};

export const getOne = async (req: Request, res: Response) => {
    try {
        const data = await getOneTodoService(req.params.id);
        res.json({ status: 200, data });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }
};

export const updateStatusToDo = async (req: Request, res: Response) => {
    try {
        const data = await updateToDoService(req.body);
        res.json({ status: 200, data });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }
};
