import { Router } from 'express';

import * as toDo from '../controllers/toDoController';

const router = Router();

router.get('/todo', toDo.getAll);
router.post('/todo', toDo.createTodo);
router.patch('/todo', toDo.updateTodo);
router.get('/todo/:id', toDo.getOne);

export default router;