
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // recuperation of the elements from the form
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let sexe = document.getElementById("sexe").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
  // a condition to check if the age of the student is betwen 14 and 24 if its not it show a mssg 
    if (age < 14 || age > 24) {
          let errorMessage = document.createElement('span');
          errorMessage.textContent = "L'âge doit être compris entre 14 et 24.";
          errorMessage.style.color = "red";
          errorMessage.style.display = "block";
          let ageInput = document.getElementById("age");
          ageInput.parentNode.insertBefore(errorMessage, ageInput.nextSibling)
      return;
    }
    // recuperation of the tbdody for the html
    let tableBody = document.querySelector("#studentsTable tbody");
    // checking if a line is editing
    let existingRow = tableBody.querySelector('.editing');
    // If a row is currently being edited and Update the values of cells in the editing row
    if (existingRow) {
        let cells = existingRow.querySelectorAll("td");
        cells[0].textContent = firstName;
        cells[1].textContent = lastName;
        cells[2].textContent = age;
        cells[3].textContent = sexe;
        cells[4].textContent = date;
        cells[5].textContent = email;
        cells[6].textContent = adresse;
        existingRow.classList.remove('editing');
    } else {
      // creating a new line on the table
        let newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = firstName;
        newRow.insertCell(1).textContent = lastName;
        newRow.insertCell(2).textContent = age;
        newRow.insertCell(3).textContent = sexe;
        newRow.insertCell(4).textContent = date;
        newRow.insertCell(5).textContent = email;
        newRow.insertCell(6).textContent = adresse;
        let actionCell = newRow.insertCell(7);
        // here were creating a div with two button one for editing and one for deleating
        let actionDiv = document.createElement('div');
        actionDiv.classList.add('action-buttons');
        actionDiv.innerHTML =
          '<button class="btn btn-primary edit"><i class="fas fa-edit"></i></button>' +
          '<button class="btn btn-danger delete"><i class="fas fa-trash"></i></button>';
        actionCell.appendChild(actionDiv);
    }
    // for the Reinitialisation of the formulaire
    document.getElementById("studentForm").reset();
});
// were using and addeventlistener for when the button of the edit it has been clicked we take the line that has been clicked the tr then take all of the cells  and we relaod it with all new info
document.getElementById("studentsTable").addEventListener("click", function(event) {
    if (event.target.classList.contains("edit")) {
        let row = event.target.closest("tr");
        let cells = row.querySelectorAll("td");
        document.getElementById("firstName").value = cells[0].textContent;
        document.getElementById("lastName").value = cells[1].textContent;
        document.getElementById("age").value = cells[2].textContent;
        document.getElementById("sexe").value = cells[3].textContent;
        document.getElementById("date").value = cells[4].textContent;
        document.getElementById("email").value = cells[5].textContent;
        document.getElementById("adresse").value = cells[6].textContent;
        row.classList.add('editing');
    }
});
// were using this function for when the button of delete it get clicked we take wich line has been clicked then we deleated
document.getElementById("studentsTable").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        row.remove();
    }
});
