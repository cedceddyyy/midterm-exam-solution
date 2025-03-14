let tasks = [];

function createTask(name, description) {
  const id = tasks.length + 1;  
  const newTask = { id, name, description };
  tasks.push(newTask);
  console.log(`Task "${name}" added successfully.`);
}

function getAllTasks() {
  if (tasks.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('Tasks List:');
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
  }
}

function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName || task.name; 
    task.description = newDescription || task.description;
    console.log(`Task ID: ${id} updated successfully.`);
  } else {
    console.log(`Task with ID: ${id} not found.`);
  }
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1); 
    console.log(`Task ID: ${id} deleted successfully.`);
  } else {
    console.log(`Task with ID: ${id} not found.`);
  }
}


createTask('Task 1', 'This is the description for task 1');
createTask('Task 2', 'This is the description for task 2');


getAllTasks();

updateTask(1, 'Updated Task 1', 'Updated description for task 1');

getAllTasks();

deleteTask(2);

getAllTasks();
