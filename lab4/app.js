const {
  createTask,
  getAllTasks,
  completeTask,
  removeTask
} = require('./todo.js');
const connection = require('./mongoConnection');

const main = async () => {
  try {
    const task1 = await createTask(
      'Ponder Dinosaurs',
      'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?'
    );
    console.log(task1);
    console.log('-----------------above is the created task1-----------------');

    await createTask('Play Pokemon with Twitch TV', 'Should we revive Helix?');
    const allTasks = await getAllTasks();
    console.log(allTasks);
    console.log('----------------above are all created tasks----------------');

    await removeTask(task1._id);
    const allTasksAfterRemoval = await getAllTasks();
    console.log(allTasksAfterRemoval);
    console.log('---------------above are all remaining tasks---------------');

    // I assume there may be many tasks remaining.
    for (const task of allTasksAfterRemoval) {
      const completed = await completeTask(task._id);
      console.log(completed);
      console.log('---------------above is the completed task---------------');
      // await removeTask(task._id); // uncomment this line to clear the db
    }
  } catch (e) {
    throw e;
  } finally {
    const db = await connection();
    await db.serverConfig.close();
    console.log('Done.');
  }
};

main();
