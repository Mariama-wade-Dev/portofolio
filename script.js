const text = document.querySelector(".job");
const jobs = ["Full Stack Developer","Frontend Developer","Web Designer"];
let i = 0;
setInterval(()=>{
text.textContent = jobs[i];
i++;
if(i===jobs.length){ i=0; }
},2000);