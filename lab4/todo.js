const todoItems = require('./mongoCollections').todoItems;

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
