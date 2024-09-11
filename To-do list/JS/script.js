// Select the necessary DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Prevent adding empty tasks

    // Create a new list item (task)
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create a strike button to mark task as completed
    const strikeBtn = document.createElement('button');
    strikeBtn.textContent = '✔';
    strikeBtn.classList.add('strike-btn');
    strikeBtn.onclick = function () {
        taskSpan.classList.toggle('strike');
    };
    listItem.appendChild(strikeBtn);

    // Create a delete button to remove the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
    };
    listItem.appendChild(deleteBtn);

    // Append the new task to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
