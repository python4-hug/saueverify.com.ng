// =======================
// LOAD PROFILE
// =======================

if(window.location.pathname.includes("profile.html")){

 let student = JSON.parse(localStorage.getItem("loggedStudent"));

 if(!student){
   window.location="index.html";
 }

 const container=document.getElementById("studentData");

 container.innerHTML=`
   <h2>${student.fullname}</h2>
   <p><b>Matric Number:</b> ${student.matric}</p>
   <p><b>Programme:</b> ${student.programme}</p>
   <p><b>Faculty:</b> ${student.faculty}</p>
   <p><b>Department:</b> ${student.department}</p>
   <p><b>Session:</b> ${student.session}</p>
   <p><b>Completed Semester:</b> ${student.semester}</p>
   <p><b>Clearance Status:</b> ${student.clearance}</p>
   <p><b>DOB:</b> ${student.dob}</p>
   <p><b>Certificate Number:</b> ${student.certificate}</p>
   <p><b>Date of Admission:</b> ${student.admission}</p>
   <p><b>Date of Graduation:</b> ${student.graduation}</p>
   <p><b>Gender:</b> ${student.gender}</p>
   <p><b>Nationality:</b> ${student.nationality}</p>
 `;


// =======================
// PASSPORT EDIT
// =======================

document.getElementById("upload")
.addEventListener("change", function(e){

 const file=e.target.files[0];
 const reader=new FileReader();

 reader.onload=function(){
   document.getElementById("passport").src=reader.result;
   localStorage.setItem("passport",reader.result);
 }

 reader.readAsDataURL(file);
});


// Load saved passport
let savedPassport=localStorage.getItem("passport");
if(savedPassport){
 document.getElementById("passport").src=savedPassport;
}

}


// =======================
// LOGOUT
// =======================

function logout(){
 localStorage.removeItem("loggedStudent");
 window.location="index.html";
}