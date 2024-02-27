let i=1;
let selectedBtn=null;
//main function
let insertBtn=document.querySelector(".insertBtn");
insertBtn.addEventListener("click",emply);
function emply(param) {
let  transferedData =readData();
if (transferedData.bikemodel==""){

  return 0;
}
 if(selectedBtn==null){
   transferData(transferedData);
 }
  else{
      update(transferedData);
      selectedBtn=null;
  }
reset();
}

//user defined functions

function readData(){
  let dataObj={}
  dataObj["bikemodel"]=document.querySelector(".value1").value;
  dataObj["price"]=document.querySelector(".value2").value;
  dataObj["year"]=document.querySelector(".value3").value;

return dataObj;
}

function transferData(x){
  let table =document.querySelector(".table");
   let row=table.insertRow(table.length);
   let c1=row.insertCell(0);
   let c2=row.insertCell(1);
   let c3 =row.insertCell(2);
   let c4 =row.insertCell(3);
   let c5 =row.insertCell(4);
  
   c1.innerHTML =table.rows.length-1;
   c2.innerHTML =x.bikemodel;
   c3.innerHTML =x.price;
   c4.innerHTML =x.year;
   c5.innerHTML =
`<i class="fa-solid editBtn fa-pen-to-square" onClick="edit(this)">&nbsp;&nbsp;</i>
<i class="fa-solid deleteBtn fa-trash" onClick="Delete(this)"> </i>`;
}

function reset(){
  document.querySelector(".value1").value="";
  document.querySelector(".value2").value="";
 document.querySelector(".value3").value="";
}

function edit(y) {
   selectedBtn=y.parentElement.parentElement;
  
  
 document.querySelector(".value1").value
 =selectedBtn.cells[1].innerHTML;
    document.querySelector(".value2").value =selectedBtn.cells[2].innerHTML;
    document.querySelector(".value3").value = selectedBtn.cells[3].innerHTML;
}
 
 function update(y){
selectedBtn.cells[1].innerHTML=y.bikemodel;
selectedBtn.cells[2].innerHTML=y.price;
selectedBtn.cells[3].innerHTML=y.year;

 }
 
 function Delete(y){
 let row=y.parentElement.parentElement;
 row.remove();
 }
