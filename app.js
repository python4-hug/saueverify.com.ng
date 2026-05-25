// STUDENT DATABASE

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
 certificateNumber:"Not Issued",
 admissionDate:"05-01-2026",
 graduationDate:"08-10-2029",
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

// students 2 PGD

{
 username:"heah27",
 password:"abcd",
 fullname:"Henry Ameh",
 matric:"2602027",
 programme:"PGD Construction project Management",
 faculty:"Management Science",
 department:"Construction project Management",
 semester:"First Semester",
 clearance:"Cleared",
 dob:"14-04-1983",
 certificateNumber:"NIL",
 admissionDate:"24-02-2026",
 graduationDate:"00-00-0000",
 gender:"Male",
 academicYear: "2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"HRM 742", title:"Strategy and Sustainability in the Global Economy", unit:2, score:84, grade:"A"},
  {course:"HRM 713", title:"Leadership and Change Management", unit:2, score:86, grade:"A"},
  {course:"HRM 745", title:"Scientific Research and Statistical Analysis", unit:1, score:84, grade:"A"},
  {course:"HRM 731", title:"Labor Laws and Legislations", unit:1, score:82, grade:"A"},
  {course:"HRM 711", title:"Introduction to Construction Management", unit:2, score:64, grade:"B"},
  {course:"HRM 784", title:"Employment Relations and Practices", unit:1, score:82, grade:"A"},
  {course:"GSD 709", title:"Study Guide and Principles", unit:1, score:94, grade:"A"},
  {course:"HRM 755", title:"Motivations & Compensations Management", unit:2, score:88, grade:"A"},
  {course:"MIS 710", title:"Management Information System", unit:1, score:82, grade:"A"},
  {course:"HRM 763", title:"Labour Law", unit:2, score:74, grade:"A"},
  {course:"HRM 717", title:"Employment Relations and Practices", unit:2, score:86, grade:"A"},
  {course:"CPM 712", title:"Risk Management and Sustainable Development:", unit:2, score:78, grade:"A"},
  {course:"CPM 716", title:"Building Information Modeling (BIM) & Digital Technology", unit:1, score:56, grade:"C"},
  {course:"GSD 709", title:"English Knowledge and Application Skills ", unit:1, score:82, grade:"A"},
  {course:"CPM 741", title:"Leadership and Managing People", unit:1, score:74, grade:"A"},
   ],

ca:[
      {course:"Strategy and Sustainability in the Global Economy", courseCode:"HRM 742", unit:2, score:1},
      {course:"Leadership and Change Management", courseCode:"HRM 713", unit:2, score:1},
      {course:"Scientific Research and Statistical Analysis", courseCode:"HRM 745", unit:1, score:1},
      {course:"Labor Laws and Legislations", courseCode:"HRM 731", unit:1, score:1},
      {course:"Introduction to Construction Management", courseCode:"HRM 711", unit:2, score:1},
      {course:"Employment Relations and Practices", courseCode:"HRM 784", unit:1, score:1},
      {course:"Motivations & Compensations Management", courseCode:"HRM 755", unit:2, score:1},
      {course:"Management Information System", courseCode:"MIS 710", unit:1, score:1},
      {course:"Study Guide and Principles", courseCode:"GSD 709", unit:1, score:1},
      {course:"Labour Law", courseCode:"HRM 763", unit:2, score:1},
      {course:"Human Resource Planning and Staffing", courseCode:"HRM 714", unit:1, score:1},
      {course:"Employment Relations and Practices", courseCode:"HRM 717", unit:2, score:1},
      {course:"Building Information Modeling (BIM) & Digital Technology", courseCode:"CPM 716", unit:1, score:1},
      {course:"English Knowledge and Application Skills", courseCode:"GSD 709", unit:1, score:1},
      {course:"Leadership and Managing People", courseCode:"CPM 741", unit:1, score:1}
    ],

    assignments:[
      {course:"ACC201", title:"Assignment 1", score:17, total:20},
      {course:"ECO201", title:"Assignment 1", score:14, total:20}
    ],



gpa: 4.2

},

// students 2 Msc programme

{
 username:"heah27",
 password:"1234",
 fullname:"Henry Ameh",
 matric:"2602027",
 programme:"Msc Construction project Management",
 faculty:"Management Science",
 department:"Construction project Management",
 semester:"First Semester",
 clearance:"Cleared",
 dob:"14-04-1983",
 certificateNumber:"NIL",
 admissionDate:"24-02-2026",
 graduationDate:"00-00-0000",
 gender:"Male",
 academicYear: "2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"HRM 842", title:"Strategy and Sustainability in the Global Economy", unit:2, score:80, grade:"A"},
  {course:"HRM 813", title:"Leadership and Change Management", unit:2, score:76, grade:"A"},
  {course:"HRM 837", title:"Human Resource Training & Development", unit:1, score:64, grade:"B"},
  {course:"HRM 876", title:"Strategic Human Resource Management", unit:1, score:80, grade:"A"},
  {course:"GSD 809", title:"Study Guide and Principles", unit:2, score:84, grade:"A"},
  {course:"CPM 801", title:"Introduction to Construction Project Management", unit:2, score:64, grade:"B"},
  {course:"HRM 810", title:"Innovation, Entrepreneurship, and Delivering Change", unit:1, score:74, grade:"A"},
  {course:"HRM 878", title:"Engaging the Diverse Workforce", unit:2, score:80, grade:"A"},
  {course:"MIS 810", title:"Management Information System", unit:1, score:78, grade:"A"},
  {course:"HRM 863", title:"Labour Law", unit:2, score:80, grade:"A"},
  {course:"HRM 814", title:"Human Resource Planning and Staffing", unit:2, score:72, grade:"A"},
  {course:"HRM 817", title:"Employment Relations and Practices:", unit:2, score:84, grade:"A"},
  {course:"CPM 818", title:"Construction Economics and Finance", unit:2, score:56, grade:"C"},
  {course:"CPM 816", title:"Construction Contract Law & Procurement:", unit:1, score:58, grade:"C"},
  {course:"GSD 809", title:"English Knowledge and Application Skills ", unit:1, score:88, grade:"A"},
 ],

ca:[
      {course:"Strategy and Sustainability in the Global Economy", courseCode:"HRM 742", unit:2, score:1},
      {course:"Leadership and Change Management", courseCode:"HRM 713", unit:2, score:1},
      {course:"Scientific Research and Statistical Analysis", courseCode:"HRM 745", unit:1, score:1},
      {course:"Labor Laws and Legislations", courseCode:"HRM 731", unit:1, score:1},
      {course:"Introduction to Construction Management", courseCode:"HRM 711", unit:2, score:1},
      {course:"Employment Relations and Practices", courseCode:"HRM 784", unit:1, score:1},
      {course:"Motivations & Compensations Management", courseCode:"HRM 755", unit:2, score:1},
      {course:"Management Information System", courseCode:"MIS 710", unit:1, score:1},
      {course:"Study Guide and Principles", courseCode:"GSD 709", unit:1, score:1},
      {course:"Labour Law", courseCode:"HRM 763", unit:2, score:1},
      {course:"Human Resource Planning and Staffing", courseCode:"HRM 714", unit:1, score:1},
      {course:"Employment Relations and Practices", courseCode:"HRM 717", unit:2, score:1},
      {course:"Building Information Modeling (BIM) & Digital Technology", courseCode:"CPM 716", unit:1, score:1},
      {course:"English Knowledge and Application Skills", courseCode:"GSD 709", unit:1, score:1},
    ],

    assignments:[
      {course:"ACC201", title:"Assignment 1", score:17, total:20},
      {course:"ECO201", title:"Assignment 1", score:14, total:20}
    ],



gpa: 4.2

},

// students 3 PGD programme

{
 username:"kezeck02",
 password:"1234",
 fullname:"Eze Celestine Kenechukwu",
 matric:"2401002",
 programme:"Post Graduate Diploma in Educational Planning and Management (PGDE)",
 faculty:"Education",
 department:"Educational Planning and Management",
 semester:"Alumni",
 clearance:"Duly Completed and Cleared",
 dob:"23-05-1977",
 certificateNumber:"024-0102",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Male",
 academicYear: "2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],



gpa: 4.2

},

// students 3 MED programme

{
 username:"kezeck02",
 password:"5678",
 fullname:"Eze Celestine Kenechukwu",
 matric:"2401002",
 programme:"MED Educational Planning and Management",
 faculty:"Education",
 department:"Educational Planning and Management",
 semester:"Alumni",
 clearance:"Duly Completed and Cleared",
 dob:"23-05-1977",
 certificateNumber:"024-0102",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Male",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

//student 4 PGD programme

{
 username:"ruad17",
 password:"1234",
 fullname:"Ruth Adejoh",
 matric:"2401017",
 programme:"Post Graduate Diploma of Education in Guidiance and Counselling (PGDE)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Alumni",
 clearance:"Awaiting",
 dob:"00-00-0000",
 certificateNumber:"024-0117",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Female",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},


// student 4 MSC Programme

{
 username:"ruad17",
 password:"efgh",
 fullname:"Ruth Adejoh",
 matric:"2401017",
 programme:"Master of Education in Guidiance and Counselling (M.Ed)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Alumni",
 clearance:"Awaiting",
 dob:"00-00-0000",
 certificateNumber:"024-0117",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Female",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 5 MSC

{
 username:"ibak06",
 password:"cfgh",
 fullname:"Ibrahim Ali Kolo",
 matric:"2409006",
 programme:"Master of Science in Human Resources Management (M.Sc)",
 faculty:"Management Science",
 department:"Human Resources Management",
 semester:"Alumni",
 clearance:"Duly Completed and Cleared",
 dob:"00-00-0000",
 certificateNumber:"024-0109",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Male",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 5 PGD

{
 username:"ibak06",
 password:"fmci",
 fullname:"Ibrahim Ali Kolo",
 matric:"2409006",
 programme:"Post Graduate Diploma in Human Resources Management (PGDE)",
 faculty:"Management Science",
 department:"Human Resources Management",
 semester:"Alumni",
 clearance:"Duly Completed and Cleared",
 dob:"00-00-0000",
 certificateNumber:"024-0109",
 admissionDate:"20-02-2023",
 graduationDate:"05-10-2023",
 gender:"Male",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 6 

{
 username:"ebw001",
 password:"hnds",
 fullname:"Elizabeth Bankume Wilson",
 matric:"2506001",
 programme:"Master of Education in Early Childhood and Educational Foundation (M.Ed)",
 faculty:"Education",
 department:"Early Childhood and Educational Foundation",
 semester:"Third",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"11-07-2025",
 graduationDate:"NIL",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 7

{
 username:"buas18",
 password:"amis",
 fullname:"Buhari Abubakar Sadiq",
 matric:"2409018",
 programme:"Master of Science in Human Resources Management (M.Sc)",
 faculty:"Management Science",
 department:"Human Resources Management",
 semester:"Alumni",
 clearance:"Duly Completed and Cleared",
 dob:"27-03-1993",
 certificateNumber:"024-0118",
 admissionDate:"22-10-2024",
 graduationDate:"16-12-2025",
 gender:"Male",
 academicYear: "2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 8

{
 username:"tau002",
 password:"yems",
 fullname:"Talatu Umar",
 matric:"2506002",
 programme:"Master of Education in Guidiance and Counselling (M.Ed)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Third",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"11-07-2025",
 graduationDate:"NIL",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 9

{
 username:"maih04",
 password:"1234",
 fullname:"Miamuna Mohammed",
 matric:"221004",
 programme:"Bachelor of Education (B.Ed)",
 faculty:"Education",
 department:"Educational Planning and Management",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"20-04-2002",
 certificateNumber:"022-0927",
 admissionDate:"20-10-2022",
 graduationDate:"2025",
 gender:"Female",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 10

{
 username:"mebi06",
 password:"abcd",
 fullname:"Mercy Bitrus",
 matric:"2601003",
 programme:"Bachelor of Education (B.Ed)",
 faculty:"Education",
 department:"Adult Education",
 semester:"1st/100Level",
 clearance:"Cleared",
 dob:"21-09-1985",
 certificateNumber:"NIL",
 admissionDate:"2026",
 graduationDate:"NIL",
 gender:"Female",
 academicYear:"2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 11

{
 username:"havi07",
 password:"efgh",
 fullname:"Hamman David Victoria",
 matric:"2508010",
 programme:"Master of Science (M.Sc)",
 faculty:"Agriculture",
 department:"Nutrition and Diatetics",
 semester:"2nd",
 clearance:"Cleared",
 dob:"10-04-1966",
 certificateNumber:"NIL",
 admissionDate:"18-08-2025",
 graduationDate:"NIL",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 12

{
 username:"feha08",
 password:"swah",
 fullname:"Felicia Hamidu",
 matric:"221105",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"18-04-1985",
 certificateNumber:"NIL",
 admissionDate:"20-10-2022",
 graduationDate:"22-07-2025",
 gender:"Female",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 13

{
 username:"gais06",
 password:"abcd",
 fullname:"Gambo Isaac",
 matric:"221004",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"20-10-1980",
 certificateNumber:"NIL",
 admissionDate:"20-10-2022",
 graduationDate:"22-07-2025",
 gender:"Male",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

//  student 14

{
  username:"sulg01",
 password:"abcd",
 fullname:"Suleiman Gidieon Suleiman",
 matric:"240701",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Active",
 clearance:"Cleared",
 dob:"10-10-1982",
 certificateNumber:"NIL",
 admissionDate:"20-10-2023",
 graduationDate:"22-04-2027",
 gender:"Male",
 academicYear:"2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

//  student 15

{
  username:"mamn23",
 password:"ghab",
 fullname:"Maryam Muhammad Aminu",
 matric:"221148",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"23-09-2003",
 certificateNumber:"022-0948",
 admissionDate:"22-10-2022",
 graduationDate:"18-11-2025",
 gender:"Female",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
              ],

gpa: 4.2

},

// student 16

  {
  username:"yusu03",
 password:"efgh",
 fullname:"Suleiman Yusuf",
 matric:"221123",
 programme:"Bachelor of Art (B.A)",
 faculty:"Social Science",
 department:"Mass Communication",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"10-10-1997",
 certificateNumber:"022-0923",
 admissionDate:"20-10-2022",
 graduationDate:"28-06-2025",
 gender:"Male",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 17

  {
  username:"raib34",
 password:"wxyz",
 fullname:"Rakiya Ibrahim",
 matric:"0000000",
 programme:"Master of Science (M.Sc)",
 faculty:"Social Science",
 department:"International Relations and Deplomacy",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"022-0923",
 admissionDate:"20-02-2019",
 graduationDate:"28-11-2021",
 gender:"Female",
 academicYear:"2019/2020",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 18

  {
  username:"sugi39",
 password:"lmnhI",
 fullname:"Suleiman Gidieon",
 matric:"240701",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Active",
 clearance:"Cleared",
 dob:"10-10-1982",
 certificateNumber:"NIL",
 admissionDate:"20-09-2023",
 graduationDate:"22-04-2027",
 gender:"Male",
 academicYear:"2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

//student 19

  {
  username:"mamo32",
 password:"abcd",
 fullname:"Mary Imohobong Nwosu",
 matric:"2409002",
 programme:"Master of Science (M.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Active",
 clearance:"Not Cleared",
 dob:"18-04-1982",
 certificateNumber:"NIL",
 admissionDate:"12-09-2024",
 graduationDate:"08-04-2026",
 gender:"Female",
 academicYear:"2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

//student 20

  {
  username:"nebu08",
 password:"isgh",
 fullname:"Nehemiah Buba Gbajunne",
 matric:"221206",
 programme:"Master of Science (M.Sc)",
 faculty:"Social Science",
 department:"International Relations and Deplomacy",
 semester:"Alumni",
 clearance:"Not Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"04-07-2019",
 graduationDate:"08-04-2021",
 gender:"Male",
 academicYear:"2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

//student 21

  {
  username:"aboy01",
 password:"efgh",
 fullname:"Aberuagba Oluwaseun Yomi",
 matric:"2050901",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Management and Social Science",
 department:"Hospitality and Hotel Management",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-10-2025",
 graduationDate:"08-04-2028",
 gender:"Male",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

//student 22

  {
  username:"erbw24",
 password:"higa",
 fullname:"Ermurasom Bwalsom",
 matric:"2601009",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Management Science",
 department:"Business Management",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"02-02-2026",
 graduationDate:"08-04-2029",
 gender:"Female",
 academicYear:"2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

//student 23

  {
  username:"pebw29",
 password:"sapz",
 fullname:"Peter Bwalsom",
 matric:"2601008",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Social Science",
 department:"Sociology",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"02-02-2026",
 graduationDate:"08-04-2029",
 gender:"Male",
 academicYear:"2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 24

  {
  username:"grmo46",
 password:"abdh",
 fullname:"Grema Mohammed Bukar",
 matric:"2506003",
 programme:"Bachelor of Education (B.Ed)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"02-06-2025",
 graduationDate:"08-04-2027",
 gender:"Male",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 25

  {
  username:"maed12",
 password:"gbar",
 fullname:"Mary Edison",
 matric:"250101",
 programme:"Bachelor of Education (B.Ed)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-01-2025",
 graduationDate:"21-02-2027",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 26

  {
  username:"asib42",
 password:"karh",
 fullname:"Askarju Ibrahim",
 matric:"2601013",
 programme:"Bachelor of Education (B.Ed)",
 faculty:"Education",
 department:"Educational Planning and Management",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-01-2026",
 graduationDate:"21-02-2028",
 gender:"Female",
 academicYear:"2026/2027",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 27

  {
  username:"ansm26",
 password:"kwdh",
 fullname:"Anda Salawu Muhammed",
 matric:"2408012",
 programme:"Bachelor of Science (B.Sc)",
 faculty:"Management Science",
 department:"Public Administration",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-01-2024",
 graduationDate:"21-02-2027",
 gender:"Male",
 academicYear:"2023/2024",
 nationality:"Nigerian",

 results:[
  {course:"PUB 345", title:"Organization and Administrative Theories", unit:2, score:64, grade:"B"},
  {course:"PUB 339", title:"Personnel Administration", unit:2, score:58, grade:"C"},
  {course:"PUB 371", title:"Public Productivity Management and Measurement", unit:2, score:52, grade:"C"},
  {course:"PUB 382", title:"Research Methods in Public Administration", unit:2, score:58, grade:"C"},
  {course:"MIS 310", title:"Management Information System", unit:3, score:76, grade:"A"},
  {course:"ENR 310", title:"Entrepreneurial Skills Development and Practice", unit:2, score:84, grade:"A"},
  {course:"GSD 310", title:"Academic Research Methods", unit:2, score:58, grade:"C"},
  {course:"GSD 311", title:"Leadership Skills", unit:2, score:72, grade:"A"},
  {course:"LAW 318", title:"Administrative Law", unit:2, score:70, grade:"A"},
  {course:"POL 311", title:"Intergovernmental Relations", unit:2, score:80, grade:"A"},
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 28

  {
  username:"chmb38",
 password:"mbap",
 fullname:"MBA Chidimma Princess",
 matric:"2501022",
 programme:"Master of Education (M.Ed)",
 faculty:"Education",
 department:"Guidiance and Counselling",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-01-2025",
 graduationDate:"21-02-2026",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 29

  {
  username:"jeon34",
 password:"sjwi",
 fullname:"Onyekachukwu Jessica Edeh",
 matric:"2409019",
 programme:"Master of Science (M.Sc)",
 faculty:"Science",
 department:"Public Health",
 semester:"Active",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"NIL",
 admissionDate:"20-01-2025",
 graduationDate:"21-04-2026",
 gender:"Female",
 academicYear:"2025/2026",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 30

  {
  username:"suyu21",
 password:"kaph",
 fullname:"Yusuf Suleiman",
 matric:"221123",
 programme:"Bachelor of Art (B.A)",
 faculty:"Art",
 department:"Mass Communication",
 semester:"Alumni",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"022-0923",
 admissionDate:"28-09-2022",
 graduationDate:"27-11-2025",
 gender:"Male",
 academicYear:"2022/2023",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 31

{
  username:"lyne15",
 password:"1234",
 fullname:"Lydia Nehemiah",
 matric:"2409015",
 programme:"BSc",
 faculty:"Social Science",
 department:"Mass Communication",
 semester:"First Semester",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"000-0000",
 admissionDate:"23-09-2024",
 graduationDate:"27-11-2027",
 gender:"Female",
 academicYear:"2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

// student 32

{
  username:"lyne15",
 password:"1234",
 fullname:"Lydia Nehemiah",
 matric:"2409015",
 programme:"BSc",
 faculty:"Social Science",
 department:"Mass Communication",
 semester:"First Semester",
 clearance:"Cleared",
 dob:"00-00-0000",
 certificateNumber:"000-0000",
 admissionDate:"23-09-2024",
 graduationDate:"27-11-2027",
 gender:"Female",
 academicYear:"2024/2025",
 nationality:"Nigerian",

 results:[
  {course:"All Courses Assesed", title:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
 ],

ca:[
    {course:"All Courses Assesed Evaluated And Transmitted to Certified True Copy Of Official Tanscript", title:"NIL", unit:0, score:0, grade:"NIL"}  
    ],

    assignments:[
            {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}
          ],
          exams: [
                {course:"All Courses Assesed", courseCode:"Evaluated And Transmitted to Certified True Copy Of Official Tanscript", unit:0, score:0, grade:"NIL"}      
            ],

gpa: 4.2

},

];

// LOGIN FUNCTION

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

// LOAD EXAMS

if(window.location.pathname.includes("exam.html")) {

  const student = JSON.parse(localStorage.getItem("loggedStudent"));

  if(!student){
    window.location = "index.html";
  }

  const table = document.getElementById("examTable");

  if(table && student.exams){

    table.innerHTML = ""; // clear previous content

    student.exams.forEach(item => {
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

const text = "Welcome to the Student Verification Portal";
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

// =======================
// PROGRAMME DISPLAY
// =======================

function showProgramme(type) {
    const container = document.getElementById("programmeDetails");
    if (!container) return;

    if (type === "msc") {
        container.innerHTML = `
        <h2>MSc Programmes</h2>

        <div class="semester-container">
            <div class="semester-card" onclick="showSemester('sem1')">1st Semester</div>
            <div class="semester-card" onclick="showSemester('sem2')">2nd Semester</div>
            <div class="semester-card" onclick="showSemester('sem3')">3rd Semester</div>
            <div class="semester-card" onclick="showSemester('sem4')">4th Semester</div>
        </div>

        <div id="semesterDetails"></div>
        `;
    } else if (type === "pgd") {
        container.innerHTML = `
        <h2>PGD Programmes</h2>

        <div class="semester-container">
            <div class="semester-card" onclick="showSemester('pgd1')">1st Semester</div>
            <div class="semester-card" onclick="showSemester('pgd2')">2nd Semester</div>
            <div class="semester-card" onclick="showSemester('pgd3')">3rd Semester</div>
        </div>

        <div id="semesterDetails"></div>
        `;
    } else if (type === "ug") {
        container.innerHTML = `
        <h2>Undergraduate Programmes</h2>

        <div class="semester-container">
            <div class="semester-card" onclick="showLevel('100')">100 Level</div>
            <div class="semester-card" onclick="showLevel('200')">200 Level</div>
            <div class="semester-card" onclick="showLevel('300')">300 Level</div>
            <div class="semester-card" onclick="showLevel('400')">400 Level</div>
        </div>

        <div id="levelDetails"></div>
        `;
    }
}

// =======================
// SHOW SEMESTER DETAILS
// =======================

function showSemester(sem) {
    const container = document.getElementById("semesterDetails");
    if (!container) return;

    // reusable table (16 rows)
    const table = `
    <table class="course-table">
    <tr>
        <th>Course Code</th>
        <th>Title</th>
        <th>Unit</th>
    </tr>

    ${Array.from({ length: 16 }).map((_, i) => `
    <tr>
        <td>COURSE${i + 1}</td>
        <td>Course Title ${i + 1}</td>
        <td>${(i % 3) + 1}</td>
    </tr>
    `).join("")}

    </table>
    `;

    // MSc
    if (sem === "sem1") {
        container.innerHTML = `<h3>MSc 1st Semester</h3>${table}`;
    } else if (sem === "sem2") {
        container.innerHTML = `<h3>MSc 2nd Semester</h3>${table}`;
    } else if (sem === "sem3") {
        container.innerHTML = `<h3>MSc 3rd Semester</h3>${table}`;
    } else if (sem === "sem4") {
        container.innerHTML = `<h3>MSc 4th Semester</h3>${table}`;
    }
    // PGD
    else if (sem === "pgd1") {
        container.innerHTML = `<h3>PGD 1st Semester</h3>${table}`;
    } else if (sem === "pgd2") {
        container.innerHTML = `<h3>PGD 2nd Semester</h3>${table}`;
    }
}

// =======================
// SHOW LEVEL
// =======================

function showLevel(level) {
    const container = document.getElementById("levelDetails");
    if (!container) return;

    container.innerHTML = `
    <h3>${level} Level</h3>

    <div class="semester-container">
        <div class="semester-card" onclick="showUGSemester('${level}-1')">1st Semester</div>
        <div class="semester-card" onclick="showUGSemester('${level}-2')">2nd Semester</div>
    </div>

    <div id="ugSemesterDetails"></div>
    `;
}

// =======================
// SHOW UG SEMESTER
// =======================

function showUGSemester(sem) {
    const container = document.getElementById("ugSemesterDetails");
    if (!container) return;

    // generate table
    let rows = "";

    for (let i = 1; i <= 16; i++) {
        rows += `
        <tr>
            <td>${sem.replace("-", "")}C${i}</td>
            <td>Course Title ${i}</td>
            <td>${(i % 3) + 1}</td>
        </tr>
        `;
    }

    const table = `
    <table class="course-table">
    <tr>
        <th>Course Code</th>
        <th>Title</th>
        <th>Unit</th>
    </tr>
    ${rows}
    </table>
    `;

    container.innerHTML = `
    <h3>${sem.includes("-1") ? "1st Semester" : "2nd Semester"}</h3>
    ${table}
    `;
}