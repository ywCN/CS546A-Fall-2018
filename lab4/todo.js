const uuidv4 = require('uuid/v4');
const todoItems = require('./mongoCollections').todoItems;

const stringValidator = param => {
  if (typeof param !== 'string') {
    throw TypeError(
      `The type of ${param} should be string, but got ${typeof param}.`
    );
  }
};

const createTask = async (title, description) => {};

const getAllTasks = async () => {};

const getTask = async id => {};

const completeTask = async taskId => {};

const removeTask = async id => {};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
};

createTask('a', 'a');
