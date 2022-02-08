let selectedRow = null;

function onFormSubmit(){
    let formdata = readform()
    if(selectedRow == null){
        insertNewRecord(formdata)
    }
    resetForm();
}

function foodchoices(){
    let res = []
    let inputs = document.querySelectorAll(".check");
    console.log(inputs)
      for (var i = 0; i < inputs.length; i++) { 
        if(inputs[i].checked) {
          res.push(inputs[i].id)
        }
      } 
      return res.join(',') 
  };

function readform(){
    let formobj = {};
    formobj["firstname"]= document.getElementById("first-name").value
    formobj["lastname"]= document.getElementById("last-name").value
    formobj["gender"]= document.getElementById("gender").value
    formobj["food"]= foodchoices();
    console.log(foodchoices())
    formobj["address"]= document.getElementById("address").value
    formobj["pincode"]= document.getElementById("pincode").value
    formobj["state"]= document.getElementById("state").value
    formobj["country"]= document.getElementById("country").value
    console.log(formobj)
    return formobj
}

function insertNewRecord(formdata){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0]
    let newRow=table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
  cell1.innerHTML = formdata.firstname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = formdata.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = formdata.gender;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = formdata.food;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = formdata.address;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = formdata.pincode;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = formdata.state;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = formdata.country;
}

  function resetForm() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById('Biryani').checked = false;
    document.getElementById('pizza').checked = false;
    document.getElementById('burger').checked = false;
    document.getElementById('cake').checked = false;
    document.getElementById('pulav').checked = false;
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;
  }