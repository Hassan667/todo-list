var form = document.querySelector("#myForm")
var taskContainer = document.getElementById("task_container")
var tasks = []


form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e.target.elements.taskTitle.value)
    console.log(e.target.elements.taskType.value)
    addTask(e.target.elements.taskTitle.value, e.target.elements.taskType.value)
    showTask()
})


function addTask(name, type) {
    var task = {
        taskName: name,
        taskType: type,
        status: false
    }

    tasks.push(task)




}

function showTask() {
    taskContainer.innerText = ""

    tasks.forEach((item, i) => {
        var div = document.createElement("div");
        (item.status == false) ? div.classList.add("alert", "alert-secondary"): div.classList.add("alert", "alert-success")
        var h3 = document.createElement("h3")
        h3.innerText = item.taskName
        var h4 = document.createElement("h4")
        h4.innerText = item.taskType
        var completedBtn = document.createElement("button")
        completedBtn.innerText = "Completed Task"
        completedBtn.classList.add("btn", "btn-success")
        var removeBtn = document.createElement("button")
        removeBtn.innerText = "Remove Task"
        removeBtn.classList.add("btn", "btn-danger", "ms-3")

        div.append(h3)
        div.append(h4)
        div.append(completedBtn)
        div.append(removeBtn)


        taskContainer.append(div)


        completedBtn.addEventListener("click", function() {
            completedTask(i)
        })

        removeBtn.addEventListener("click", function() {
            removeTask(i)
        })

    })


}


function completedTask(index) {
    tasks[index].status = true
    console.table(tasks)

    showTask()
}

function removeTask(index) {
    tasks.splice(index, 1)
    showTask()
}