console.log("js ok");

const suffisso = "21";
console.log(suffisso);
const password = document.getElementById("my_password");
console.log(password);

const firstName = prompt("Scrivi il tuo nome", "Tommaso");
console.log(firstName);
const lastName = prompt("Scrivi il tuo nome", "Cavini");
console.log(lastName);
const color = prompt("Scrivi un colore", "purple");
console.log(color);

password.innerText = firstName + lastName + color + suffisso
