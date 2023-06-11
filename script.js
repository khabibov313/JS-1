// function adjustTable() {
    
//     let option = parseInt(document.getElementById("option").value);

    
//     let table = document.getElementById("myTable");

    
//     table.innerHTML = "";

    
//     for (let i = 0; i < option; i++) {
//         let row = document.createElement("tr");

//         for (let j = 0; j < option; j++) {
//             let cell = document.createElement("td");

            
//             if (i === j) {
//                 cell.style.backgroundColor = "black";
//             }

//             cell.appendChild(document.createTextNode(i + "," + j));
//             row.appendChild(cell);
//         }

//         table.appendChild(row);
//     }
// }

// function validateForm() {
    
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

    
//     let example = [
//         { email: "user1@example.com", password: "nsnsddek123" },
//         { email: "user2@example.com", password: "dfkfkkekdk124" },
//         { email: "user3@example.com", password: "fovovnrn321" }
//     ];

    
//     for (var i = 0; i < example.length; i++) {
//         var record = example[i];

//         if (email === example.email && password === example.password) {
//             alert("Login successful!");
//             return true;
//         }
//     }

//     alert("Invalid email or password.");
//     return false;
// }

console.log(window);