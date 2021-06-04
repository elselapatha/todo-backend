const { Router } = require('express');
const router = Router();

const todoService = require('../services/todo');

router.get('/', todoService.getTodoList);

router.post('/', todoService.postTodo);

router.patch('/:id', todoService.doneTodo);

router.delete('/:id', todoService.deleteTodo);

module.exports = router;
