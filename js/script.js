// TAB SELECTION

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget); // = the ID
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// FAQ ACCORDION

const questions = document.getElementsByClassName("faq__list__question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("faq__list__question__active");

    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

// FORM VALIDATION

const form = document.getElementById("form");
const email = document.getElementById("email");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function checkRequired(input) {
  if (input.value.trim() === "") {
    showError(input, "Whoops, please enter email");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired(email);
  //checkEmail(email);
});
