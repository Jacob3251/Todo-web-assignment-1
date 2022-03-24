function submitTask (){
    const TASK = document.getElementById("TASKS");
    const titleText = document.getElementById("title-text").value;
    const descriptionText = document.getElementById("description-text").value;
    if(titleText || descriptionText !== ''){
        const div = document.createElement("div");
    div.classList.add("task-item");
    div.innerHTML = `
    <h3>Task: ${titleText}</h3></h3>
    <p>Details: ${descriptionText}</p>
    <div id="clearOne-button"><button  onclick="clearOneTask()">Clear Task</button></div>
    
    
    `;
    TASK.appendChild(div);
    div.style.paddingLeft = "30px";
    div.style.textAlign = "left";
    titleText.value = '';
    descriptionText.value = '';
    document.getElementById("title-text").value = '';
    document.getElementById("description-text").value = '';
    }
    
    
}
function clearTask() {
    const TASK = document.getElementById("TASKS");
    TASK.remove();
}
function clearOneTask(){
    const TASK = document.getElementById("TASKS");
    TASK.removeChild(TASK.firstElementChild);
}
