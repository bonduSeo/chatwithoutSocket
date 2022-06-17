const ctnt = document.querySelector("#ctnt");
const ctntBox = document.querySelector("#ctntBox");

const button = document.querySelector("#button");
const inputText = document.querySelector('input[type="text"]');

button.addEventListener("click", () => {
  letsChat(false);
});
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    letsChat(false);
    e.stopPropagation();
  }
});
letsChat(false);

setInterval(() => {
  letsChat(true);
}, 200);

function letsChat(autoCheck) {
  let sendText = autoCheck ? "" : inputText.value;
  if (!autoCheck) {
    inputText.value = "";
  }

  fetch(`chat.php?input=${sendText}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      printChat(data, autoCheck);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function printChat(data, autoCheck) {
  ctnt.innerHTML = "";
  data.forEach((line) => {
    ctnt.innerHTML += line + "<br>";
  });
  if (!autoCheck) {
    ctntBox.scrollTop = ctntBox.scrollHeight;
  }
}
