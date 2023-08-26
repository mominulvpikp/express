const express = require('express');
const { getAllUser, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const route = express.Router();


route.get('/', getAllUser);
route.get('/:id', getOneUser);
route.post('/', createUser);
route.patch('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = route;