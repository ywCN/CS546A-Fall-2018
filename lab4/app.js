const {
  createTask,
  getAllTasks,
  completeTask,
  removeTask
} = require('./todo.js');
const connection = require('./mongoConnection');

const main = async () => {
  const task1 = await createTask(
    'Ponder Dinosaurs',
    'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?'
  );
  console.log(task1, '\n is created.');

  await createTask('Play Pokemon with Twitch TV', 'Should we revive Helix?');
  const allTasks = await getAllTasks();
  console.log(allTasks, '\n are all tasks.');

  await removeTask(task1._id);
  const allTasksAfterRemoval = await getAllTasks();
  console.log(allTasksAfterRemoval, '\n are all tasks remaining.');

  // I assume there may be many tasks remaining.
  for (const task of allTasksAfterRemoval) {
    const completed = await completeTask(task._id);
    console.log(completed, '\n is completed.');
  }

  const db = await connection();
  await db.serverConfig.close();

  console.log('Done.');
};

try {
  await main();
} catch (e) {
  throw e;
}
