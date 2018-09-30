const uuidv4 = require('uuid/v4');
const todoItems = require('./mongoCollections').todoItems;

const validateStringParam = param => {
  if (typeof param !== 'string') {
    throw TypeError(
      `The type of ${param} should be string, but got ${typeof param}.`
    );
  }
};

const createTask = async (title, description) => {
  validateStringParam(title);
  validateStringParam(description);
};

const getAllTasks = async () => {};

const getTask = async id => {
  validateStringParam(id);
};

const completeTask = async taskId => {
  validateStringParam(taskId);
};

const removeTask = async id => {
  validateStringParam(id);
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
};

createTask('a', 'a');
