let resBtn = document.querySelector(".resBtn")
let message = document.querySelector(".message")

function click(e){
    e.preventDefault()
    e.target.classList.toggle(".resBtn");
  if (e.target.classList.contains(".resBtn")) {
    message.textContent="Button Clicked"
  } else {
    message.textContent=""
  }
  console.log("button clicked")
}

resBtn.addEventListener('click', click)

