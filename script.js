document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const task = taskInput.value.trim();

        if (task===''){
            alert('TASK FIELD IS EMPTY');
            return;
        }
        if (task) {
            const listItem = document.createElement("li");
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <span>${task}</span>
                <div class='format' >
                    <button class="donebtn">Done</button>
                    <button class="delbtn">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }

    }
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delbtn')) {
            const listItem = e.target.parentElement.parentElement;
            taskList.removeChild(listItem);
        }
        if (e.target.classList.contains('donebtn')) {
            const listItem = e.target.parentElement.parentElement;
            listItem.classList.toggle('list-group-item-success');
        }
    });
});