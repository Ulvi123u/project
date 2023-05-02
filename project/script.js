
const planInput = document.getElementById("plan-input");
const planList = document.getElementById("plan-list");
const addButton = document.getElementById("add-btn");

let plans = [];

function addPlan() {
  const planText = planInput.value.trim();

  if (!planText) {
    return;
  }

  const newPlan = {
    id: Date.now(),
    text: planText,
    completed: false,
  };

  plans.push(newPlan);

  renderPlans();

  planInput.value = "";
}

function deletePlan(id) {
  plans = plans.filter((plan) => plan.id !== id);

  renderPlans();
}

function togglePlan(id) {
  const plan = plans.find((plan) => plan.id === id);

  plan.completed = !plan.completed;

  renderPlans();
}

function renderPlans() {
    planList.innerHTML = "";
  
    for (const plan of plans) {
      const li = document.createElement("li");
      
  
      if (plan.completed) {
        li.style.textDecoration = "line-through";
      }
  
      const textSpan = document.createElement("span");
    //   span.id="span1"
      textSpan.textContent = plan.text;
      const deleteImg = document.createElement("img");
      deleteImg.setAttribute("src", "./sekil2.svg"); 
      deleteImg.id = "delete-btn1";
      deleteImg.addEventListener("click", () => deletePlan(plan.id));
      li.appendChild(textSpan);
      li.appendChild(deleteImg);
      li.addEventListener("click", () => togglePlan(plan.id));
  
      planList.appendChild(li);
    }
  }

addButton.addEventListener("click", addPlan);

renderPlans();

const deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", () => {
  planInput.value = "";
});

planInput.addEventListener("input", () => {
  if (planInput.value === "") {
    deleteBtn.style.visibility = "hidden";
  } else {
    deleteBtn.style.visibility = "visible";
  }
});

planInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addPlan();
  }
});

let sortAsc = true;
let sortDesc = false;

function sortPlans() {
  if (sortAsc) {
    plans.sort((a, b) => a.text.localeCompare(b.text));
  } else {
    plans.sort((a, b) => b.text.localeCompare(a.text));
  }

  renderPlans();
}

const sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", sortPlans);

// let sortAsc = true;

const sortImg = document.querySelector("#sort-btn img");
function sortPlans() {
  if (sortAsc) {
    plans.sort((a, b) => a.text.localeCompare(b.text));
    sortImg.setAttribute("src", "./sekil4.svg");
    sortAsc = false;
  } else {
    plans.sort((a, b) => b.text.localeCompare(a.text));
    sortImg.setAttribute("src", "./sekil3.svg");
    sortAsc = true;
  }

  renderPlans();
}
