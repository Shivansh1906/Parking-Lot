var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Owner_Name"] = document.getElementById("Owner").value;
    formData["Vehicle_Name"] = document.getElementById("vehicle").value;
    formData["Vehicle_Number"] = document.getElementById("licensePlate").value;
    formData["Entry_Date"] = document.getElementById("entrydate").value;
    formData["Exit_Date"] = document.getElementById("exitdate").value;    

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Owner_Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Vehicle_Name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Vehicle_Number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Entry_Date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Exit_Date;
    
}

function resetForm() {
    document.getElementById("Owner").value = "";
    document.getElementById("vehicle").value = "";
    document.getElementById("licensePlate").value = "";
    document.getElementById("entrydate").value = "";
    document.getElementById("exitdate").value = "";

    selectedRow = null;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Owner_Name;
    selectedRow.cells[1].innerHTML = formData.Vehicle_Name;
    selectedRow.cells[2].innerHTML = formData.Vehicle_Number;
    selectedRow.cells[3].innerHTML = formData.Entry_Date;
    selectedRow.cells[4].innerHTML = formData.Exit_Date;

}



function validate() {
    isValid = true;
    if (document.getElementById("Owner").value == "") {
        isValid = false;
        document.getElementById("OwnerValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("OwnerValidationError").classList.contains("hide"))
            document.getElementById("OwnerValidationError").classList.add("hide");
    }
    return isValid;
}

ifValid =true ;
if (document.getElementById("Owner").value =="");