function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => li.classList.toggle('completed');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => taskList.removeChild(li);
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
}
