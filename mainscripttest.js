// =======================
// STUDENT DATABASE
// =======================

const students = [

{
 username:"futuretechai",
 password:"42428282",
 fullname:"Victor James",
 matric:"U2023/001",
 programme:"BSc Cyber Security",
 faculty:"Science",
 department:"Computer Science",
 semester:"First Semester",
 clearance:"Pending",
 dob:"11-01-2007",
 certificateNumber:"Not Issed",
 admissionDate:"05-01-2026",
 graduationDate:"Still in Session",
 gender:"Male",
 academicYear: "2026/2027",
 nationality:"Nigerian",
 
 results:[
  {course:"CSC101", title:"Introduction to Computing", unit:3, score:78, grade:"A"},
  {course:"MTH101", title:"Calculus I", unit:3, score:65, grade:"B"},
  {course:"GST101", title:"Use of English", unit:2, score:70, grade:"A"},
  {course:"CSC103", title:"Programming I", unit:3, score:80, grade:"A"}
 ],

 ca:[
      {course:"Introduction to Communication Skills", courseCode:"ENG 102", unit:1, score:28},
      {course:"Fundamentals in Innovation and Entrepreneurship", courseCode:"ENR 141", unit:3, score:24},
      {course:"Critical Thinking", courseCode:"PSY  108", unit:3, score:28},
      {course:"Elements of Computing", courseCode:"CED 101", unit:2, score:27},
      {course:"Introduction to Computer Science", courseCode:"GSD 104", unit:1, score:30},
      {course:"Linear Algebra", courseCode:"MTM 104", unit:2, score:29},
      {course:"Introduction to Logic and Philosophy", courseCode:"GSD 106", unit:2, score:25},
      {course:"Introduction to Sociology", courseCode:"SOC 104", unit:2, score:24},
      {course:"Study Guide and Principles", courseCode:"GSD 104", unit:1, score:20},
      {course:"Introduction to Psychology", courseCode:"PSY 101", unit:2, score:19},
      {course:"Introduction to Cyber Security", courseCode:"CSC 101", unit:3, score:30},
      {course:"English Knowledge and Application Skills", courseCode:"GSD 109", unit:2, score:27}

    ],

    assignments:[
      {course:"CSC101", title:"Assignment 1", score:15, total:20},
      {course:"MTH101", title:"Assignment 1", score:18, total:20}
    ],

gpa: 4.2

},

const students = [
  {
    username: "amina",
    password: "abcd",
    fullname: "Amina Bello",
    matric: "U2022/045",
    programme: "BSc Accounting",
    faculty: "Management Science",
    department: "Accounting",
    semester: "Second Semester",
    clearance: "Pending",
    dob: "02-11-2002",
    certificateNumber: "CERT-002",
    admissionDate: "11-10-2022",
    graduationDate: "11-10-2026",
    gender: "Female",
    academicYear: "2026/2027",
    nationality: "Nigerian",

    results: [
      { course: "ACC201", title: "Financial Accounting", unit: 3, score: 72, grade: "A" },
      { course: "ECO201", title: "Microeconomics", unit: 3, score: 60, grade: "B" },
      { course: "BUS202", title: "Business Law", unit: 2, score: 68, grade: "B" },
      { course: "ACC203", title: "Cost Accounting", unit: 3, score: 75, grade: "A" }
    ],

    assignments: [
      { course: "ACC201", title: "Assignment 1", score: 17, total: 20 },
      { course: "ECO201", title: "Assignment 1", score: 14, total: 20 }
    ],

    ca: [
      { course: "Strategy and Sustainability in the Global Economy", courseCode: "HRM742", units: 2 },
      { course: "Leadership and Change Management", courseCode: "HRM713", units: 2 },
      { course: "Scientific Research and Statistical Analysis", courseCode: "HRM745", units: 1 },
      { course: "Labor Laws and Legislations", courseCode: "HRM731", units: 1 },
      { course: "Introduction to Construction Management", courseCode: "HRM711", units: 2 },
      { course: "Employment Relations and Practices", courseCode: "HRM784", units: 1 },
      { course: "Study Guide and Principles", courseCode: "GSD709", units: 1 },
      { course: "Motivations & Compensations Management", courseCode: "HRM755", units: 2 },
      { course: "Management Information System", courseCode: "MIS710", units: 1 },
      { course: "Labour Law", courseCode: "HRM763", units: 2 },
      { course: "Human Resource Planning and Staffing", courseCode: "HRM714", units: 1 },
      { course: "Employment Relations and Practices", courseCode: "HRM717", units: 2 },
      { course: "Risk Management and Sustainable Development", courseCode: "CPM712", units: 2 },
      { course: "Building Information Modeling (BIM) & Digital Tech", courseCode: "CPM716", units: 1 },
      { course: "English Knowledge and Application Skills", courseCode: "GSD709", units: 1 },
      { course: "Leadership and Managing People", courseCode: "CPM741", units: 1 }
    ],

    gpa: 4.2
  }
];


// =======================
// LOGIN FUNCTION
// =======================

function login(){

 let user=document.getElementById("username").value;
 let pass=document.getElementById("password").value;

 const btn=document.getElementById("loginBtn");

 if(btn){
   btn.classList.add("loading");
 }

 setTimeout(()=>{

 let student = students.find(
   s => s.username===user && s.password===pass
 );

 if(student){
   localStorage.setItem("loggedStudent", JSON.stringify(student));
   window.location="profile.html";
 }else{
   document.getElementById("msg").innerText="Invalid login!";
 }

 if(btn){
   btn.classList.remove("loading");
 }

 },1000);

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

 if(container){

 container.innerHTML=`
   <h2>${student.fullname}</h2>
   <p><b>Matric Number:</b> ${student.matric}</p>
   <p><b>Programme:</b> ${student.programme}</p>
   <p><b>Faculty:</b> ${student.faculty}</p>
   <p><b>Department:</b> ${student.department}</p>
   <p><b>Completed Semester:</b> ${student.semester}</p>
   <p><b>Clearance Status:</b> ${student.clearance}</p>
   <p><b>DOB:</b> ${student.dob}</p>
   <p><b>Certificate Number:</b> ${student.certificateNumber}</p>
   <p><b>Date of Admission:</b> ${student.admissionDate}</p>
   <p><b>Date of Graduation:</b> ${student.graduationDate}</p>
   <p><b>Gender:</b> ${student.gender}</p>
   <p><b>Academic Year:</b> ${student.academicYear}</p>
   <p><b>Nationality:</b> ${student.nationality}</p>
 `;
 }

}


// =======================
// LOAD RESULTS
// =======================

if(window.location.pathname.includes("results.html")){

let student = JSON.parse(localStorage.getItem("loggedStudent"));

if(!student){
 window.location="index.html";
}

const table=document.getElementById("resultsTable");

if(table && student.results){

table.innerHTML="";

student.results.forEach(result=>{

table.innerHTML += `
<tr>
<td>${result.course}</td>
<td>${result.title}</td>
<td>${result.unit}</td>
<td>${result.score}</td>
<td>${result.grade}</td>
</tr>
`;

});

}

}

// GPA Page
if(window.location.pathname.includes("gpa.html")){
  const student = JSON.parse(localStorage.getItem("loggedStudent"));
  if(!student){
    window.location = "index.html";
  }

  const gpaElement = document.getElementById("studentGPA");
  if(gpaElement){
    gpaElement.innerText = student.gpa.toFixed(2);
  }
}

// Assignments Page
if(window.location.pathname.includes("assignments.html")) {
  const student = JSON.parse(localStorage.getItem("loggedStudent"));
  if(!student){
    window.location = "index.html";
  }

  const table = document.getElementById("assignmentsTable");
  if(student.assignments){
    student.assignments.forEach(item=>{
      table.innerHTML += `
        <tr>
          <td>${item.course}</td>
          <td>${item.title}</td>
          <td>${item.score}</td>
          <td>${item.total}</td>
        </tr>
      `;
    });
  }
}

// load assignment

if(window.location.pathname.includes("assignments.html")) {

  const student = JSON.parse(localStorage.getItem("loggedStudent"));
  if(!student){
    window.location = "index.html";
  }

  const table = document.getElementById("assignmentsTable");

  if(student.assignments){
    student.assignments.forEach(item=>{
      table.innerHTML += `
        <tr>
          <td>${item.course}</td>
          <td>${item.title}</td>
          <td>${item.score}</td>
          <td>${item.total}</td>
        </tr>
      `;
    });
  }
}

// load ca
if(window.location.pathname.includes("ca.html")) {

  const student = JSON.parse(localStorage.getItem("loggedStudent"));
  if(!student){
    window.location = "index.html";
  }

  const table = document.getElementById("caTable");

  if(student.ca){
    student.ca.forEach(item=>{
      table.innerHTML += `
        <tr>
          <td>${item.course}</td>
          <td>${item.courseCode}</td>
          <td>${item.unit}</td>
          <td>${item.score}</td>
        </tr>
      `;
    });
  }
}
// =======================
// PASSPORT EDIT
// =======================

const upload=document.getElementById("upload");
const passport=document.getElementById("passport");

if(upload && passport){

upload.addEventListener("change", function(e){

 const file=e.target.files[0];
 const reader=new FileReader();

 reader.onload=function(){
   passport.src=reader.result;
   localStorage.setItem("passport",reader.result);
 }

 reader.readAsDataURL(file);

});

let savedPassport=localStorage.getItem("passport");

if(savedPassport){
 passport.src=savedPassport;
}

}


// =======================
// LOGOUT
// =======================

function logout(){

 localStorage.removeItem("loggedStudent");
 window.location="index.html";

}


// =======================
// Typing Animation
// =======================

const typingElement=document.getElementById("typing");

if(typingElement){

const text = "Welcome to the Student Portal";
let i = 0;

function typeWriter(){

 if(i < text.length){
  typingElement.innerHTML += text.charAt(i);
  i++;
  setTimeout(typeWriter,70);
 }

}

typeWriter();

}


// =======================
// Password Toggle
// =======================

function togglePassword(){

const pass=document.getElementById("password");

if(pass.type==="password"){
 pass.type="text";
}else{
 pass.type="password";
}

}