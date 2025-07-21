// let username = prompt("Enter username: ");
// let password = prompt("Enter password: ");

// if (username === "emma" && password === "restorer") {
//   alert("congratulations, you have successfully login!");
// } else {
//   document.write(
//     `<p style="color:red;">Login details provided was incorrect</p>`
//   );
// }

//switch
let fruits = prompt("enter fruits name: ").toLowerCase();
switch (fruits) {
  case "apple":
    document.write(`<p>This is an apple fruits</p>`);
    break;
  case "banana":
    document.write(`<p>This is an banana fruits</p>`);
    break;
  case "orange":
    document.write(`<p>This is an orange fruits</p>`);
    break;
  default:
    document.write(`<p>Unknown fruits</p>`);
}
