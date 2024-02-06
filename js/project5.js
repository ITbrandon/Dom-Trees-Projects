class tasks {
  constructor(button, input, taskContainer) {
    this.button = button;
    this.input = input;
    this.taskContainer = taskContainer;
    this.init();
  }

  init = () => {
    this.button.addEventListener('click', this.newTask);

    

    deleteButton.addEventListener('click', this.deleteTask);
  }

  newTask = () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let taskItem = document.createElement('li');
    taskItem.innerText = this.input.value;
    taskItem.classList.add('task-item');
    task.appendChild(taskItem);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-button');
    task.appendChild(checkButton);

    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    task.appendChild(trashButton);

    this.displayTask(task);

    checkButton.addEventListener('click', (event) => {
      let target = event.target
      
      if(event.target.classList.contains('fas'))
      {
        target.parentElement.previousElementSibling.classList.toggle("line-through");
        task.classList.toggle('active');
      }
      else
      {
        target.previousElementSibling.classList.toggle("line-through");
        task.classList.toggle('active');
      }
    });

    trashButton.addEventListener('click', (event) => {
      let target = event.target

      if(event.target.classList.contains('fas'))
      {
        target.parentElement.parentElement.remove();
      }
      else {
        target.parentElement.remove();
      }
    })
  }

  displayTask = (task) => {
    
    if(this.input.value === "")
    {
      alert("You Didn't Enter a Task")
      this.input.value = "";
    }
    else
    {
    this.input.value = "";
    this.taskContainer.appendChild(task);
    console.log(this.taskContainer);
    }
  }

}

const add = new tasks(document.querySelector('#input-button'), document.querySelector('#input-task'), document.querySelector('#task-container'));