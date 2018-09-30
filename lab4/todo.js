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

  const todoItemCollection = await todoItems();
  const newTodoItem = {
    _id: uuidv4(),
    title: title,
    description: description,
    completed: false,
    completedAt: null
  };

  const insertInfo = await todoItemCollection.insertOne(newTodoItem);
  if (insertInfo.insertedCount === 0) {
    throw 'Could not create new task.';
  }
};

const getAllTasks = async () => {
  const todoItemCollection = await todoItems();
  const todoItems = await todoItemCollection.find({}).toArray();
  return todoItems;
};

const getTask = async id => {
  validateStringParam(id);

  const todoItemCollection = await todoItems();
  const todoItem = await todoItemCollection.findOne({ _id: id });
  if (todoItem === null) {
    throw `Unable to find task with id of ${id}.`;
  }
  return todoItem;
};

const completeTask = async id => {
  validateStringParam(id);

  const todoItemCollection = await todoItems();

  const updateInfo = await todoItemCollection.updateOne(
    { _id: id },
    {
      completed: true,
      completedAt: new Date()
    }
  );
  if (updateInfo.modifiedCount === 0) {
    throw `Unable to complete the task with id of ${id}.`;
  }

  return await getTask(id);
};

const removeTask = async id => {
  validateStringParam(id);

  const todoItemCollection = await todoItems();
  const deleteInfo = await todoItemCollection.removeOne({ _id: id });

  if (deleteInfo.deletedCount === 0) {
    throw `Unable to remove task with id of ${id}.`;
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
};
