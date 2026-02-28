// =======================
// STUDENT DATABASE (Fake)
// =======================

const students = [
{
 username:"john",
 password:"1234",
 fullname:"John Musa",
 matric:"U2023/001",
 programme:"BSc Computer Science",
 faculty:"Science",
 department:"Computer Science",
 session:"2023/2024",
 semester:"First Semester",
 clearance:"Cleared",
 dob:"12-05-2003",
 certificate:"CERT-001",
 admission:"10-10-2023",
 graduation:"10-10-2027",
 gender:"Male",
 nationality:"Nigerian"
},

{
 username:"amina",
 password:"abcd",
 fullname:"Amina Bello",
 matric:"U2022/045",
 programme:"BSc Accounting",
 faculty:"Management Science",
 department:"Accounting",
 session:"2022/2023",
 semester:"Second Semester",
 clearance:"Pending",
 dob:"02-11-2002",
 certificate:"CERT-002",
 admission:"11-10-2022",
 graduation:"11-10-2026",
 gender:"Female",
 nationality:"Nigerian"
}
];


// =======================
// LOGIN FUNCTION
// =======================

function login(){

 let user=document.getElementById("username").value;
 let pass=document.getElementById("password").value;

 let student = students.find(
   s => s.username===user && s.password===pass
 );

 if(student){
   localStorage.setItem("loggedStudent", JSON.stringify(student));
   window.location="profile.html";
 }else{
   document.getElementById("msg").innerText="Invalid login!";
 }
}


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
} =======================
// STUDENT DATABASE
// =======================

const students = [
{
 username: "futuretechai",
 password: "42428282",
 fullname: "Victor James",
 matric: "U2023/001"
 ,
 programme: "BSc Cyber Security",
 faculty: "Science",
 department: "Computer Science",
 session: "2025/2026",
 semester: "First Semester",
 clearance: "Pending",
 dob: "11-01-2007",
 certificate: "Not Issued",
 admission: "05-01-2026",
 graduation: "Still in Session",
 gender: "Male",
 nationality: "Nigerian"
},
{
 username: "amina",
 password: "abcd",
 fullname: "Amina Bello",
 matric: "U2022/045",
 programme: "BSc Accounting",
 faculty: "Management Science",
 department: "Accounting",
 session: "2022/2023",
 semester: "Second Semester",
 clearance: "Pending",
 dob: "02-11-2002",
 certificate: "CERT-002",
 admission: "11-10-2022",
 graduation: "11-10-2026",
 gender: "Female",
 nationality: "Nigerian"
}
];


// =======================
// LOGIN
// =======================

function login(){

 const username = document.getElementById("username")?.value.trim();
 const password = document.getElementById("password")?.value.trim();

 if(!username || !password) return;

 const student = students.find(
   s => s.username === username && s.password === password
 );

 if(student){
   localStorage.setItem("loggedStudent", JSON.stringify(student));
   window.location.href = "profile.html";
 }else{
   document.getElementById("msg").innerText = "Invalid login!";
 }
}


// =======================
// PROFILE LOAD
// =======================

document.addEventListener("DOMContentLoaded", () => {

if(!location.pathname.includes("profile.html")) return;

const student =
 JSON.parse(localStorage.getItem("loggedStudent"));

if(!student){
 location.href="index.html";
 return;
}

// Load data
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
<p><b>Date of Birth:</b> ${student.dob}</p>
<p><b>Certificate Number:</b> ${student.certificate}</p>
<p><b>Date of Admission:</b> ${student.admission}</p>
<p><b>Date of Graduation:</b> ${student.graduation}</p>
<p><b>Gender:</b> ${student.gender}</p>
<p><b>Nationality:</b> ${student.nationality}</p>
`;


// Passport upload
const upload=document.getElementById("upload");
const passport=document.getElementById("passport");

const saved=localStorage.getItem("passport_"+student.username);
if(saved) passport.src=saved;

upload.addEventListener("change",e=>{
 const file=e.target.files[0];
 if(!file) return;

 const reader=new FileReader();
 reader.onload=()=>{
   passport.src=reader.result;
   localStorage.setItem(
     "passport_"+student.username,
     reader.result
   );
 };
 reader.readAsDataURL(file);
});

});


// =======================
// LOGOUT
// =======================

function logout(){
 localStorage.removeItem("loggedStudent");
 location.href="index.html";
}