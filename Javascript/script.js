
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let sexe = document.getElementById("sexe").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      age.trim() === "" ||
      sexe.trim() === "" ||
      date.trim() === "" ||
      email.trim() === "" ||
      adresse.trim() === ""
    ) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
    if (age < 14 || age > 24) {
      alert("L'âge doit être compris entre 14 et 24 ans.");
      return;
    }
    let tableBody = document.querySelector("#studentsTable tbody");
    let existingRow = tableBody.querySelector('.editing');
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
        let newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = firstName;
        newRow.insertCell(1).textContent = lastName;
        newRow.insertCell(2).textContent = age;
        newRow.insertCell(3).textContent = sexe;
        newRow.insertCell(4).textContent = date;
        newRow.insertCell(5).textContent = email;
        newRow.insertCell(6).textContent = adresse;
        let actionCell = newRow.insertCell(7);
        let actionDiv = document.createElement('div');
        actionDiv.classList.add('action-buttons');
        actionDiv.innerHTML =
          '<button class="btn btn-primary edit"><i class="fas fa-edit"></i></button>' +
          '<button class="btn btn-danger delete"><i class="fas fa-trash"></i></button>';
        actionCell.appendChild(actionDiv);
    }
    document.getElementById("studentForm").reset();
});
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
document.getElementById("studentsTable").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        row.remove();
    }
});
