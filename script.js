/* Homepage Functions */
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

/* Show & Close Popup Project */
function projectOn() {
  document.getElementById("output").style.display = "block";
}

function projectOff() {
  document.getElementById("output").style.display = "none";
}

/* Dynamic html Project Functions */
function getCards() {

  let outputMain = "";

 fetch("projects.json")
 .then((res) => res.json())
 .then((data) => {
   data.forEach(a => {

  outputMain += `

       <div class="work-container card_${a.id}">
    
                 <div class="work-container-background">
                     <div id="${a.id}" class="work-image-container">
                          <img src="${a.image}" alt="Main image of professional with orange background"> 
                     </div>
    
                     <div class="work-text-container">
                         <div class="card-title">
                              <h2>${a.name}</h2>
                             <div class="work-complementary-text">
                                 <ul class="work-complementary-list">
                                      <li class="canopy">${a.projectClient}</li>
                                     <li class="canopy-complement"><img src="./Assets/Counter.png" alt="">${a.projectInfo[0]}</li>
                                     <li class="canopy-complement"><img src="./Assets/Counter.png" alt="">${a.projectInfo[1]}</li>
                                 </ul>
                             </div>
                         </div>
                         <div class="card-body">
                              <p>${a.mainText}</p>
                             <div>
                                 <ul class="buttons-work-container">
                                     <li class="btn-work-style">${a.technologies[0]}</li>
                                     <li class="btn-work-style">${a.technologies[1]}</li>
                                    <li class="btn-work-style">${a.technologies[2]}</li>
                                 </ul>
                             </div>
                         </div>
                         <div class="card-button">
                             <button onclick="getProject(${a.id})" class="button-work-project">SEE PROJECT</button>
                         </div>
                     </div>
                 </div>
             </div>`;
          
          document.getElementById("outputMain").innerHTML = outputMain;   
        });

        document.getElementById("1").style.order = 1;
        document.getElementById("3").style.order = 1;
        
 }
)}

/* Dynamic Popup Project Functions */
function getProject(a) {
  projectOn();
fetch("projects.json")
.then((res) => res.json())
.then((data) => {
 output = `
 <div class="project_overlay">
  <div class="project_structure_overlay">
      <div> 
          <button onclick="projectOff()" class="project_overlay_btn_close"> X </button>
      </div>
      <div class="project_heading_overlay">
              <h2 class="title_overlay"> ${data[a].name} </h2>
              <ul class="project_body_title_list">
                  <li class="title_list_main_overlay">${data[a].projectClient}</li>
                  <li><img class="counter_overlay" src="./Assets/Counter.png" >${data[a].projectInfo[0]}</li>
                  <li><img class="counter_overlay" src="./Assets/Counter.png" >${data[a].projectInfo[1]}</li>
              </ul>
      </div>
      <div> <img class="image_ovlerlay" src=${data[a].image} alt="snapshoot"> </div>
      <div class="project_body_overlay">
          <div class="text_group_overlay">
              <p>${data[a].mainText}</p>
          </div>
          <div class="btn_group_overlay">
          <ul class="project_tech_overlay">
                  <li>${data[a].technologies[0]}</li>
                  <li>${data[a].technologies[1]}</li>
                  <li>${data[a].technologies[2]}</li>
              </ul>
              <hr class="hr_style">
              <div class="btn_flex_overlay">
                <button class="overlay_btn"> <a href="${data[a].liveVersionLink}"> See Live <img src="./Assets/Icon_Export.png" > </a> </button>
                <button class="overlay_btn"> <a href="${data[a].liveVersionLink}"> See Source <img src="./Assets/github_in_button.png" > </a> </button>
              </div>
          </div>
      </div>
  
  </div>
  </div>`; 

  document.getElementById("output").innerHTML = output;
});
}

/* Form Validation */
document.getElementById('contact-form').addEventListener('submit', (e) => {
  const emailInput = document.getElementById('email-address');
  const emailRegEx = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+/;
  if (!emailRegEx.test(emailInput.value)) {
    document.getElementById('error').innerText = "Note: Email Validation Error. Email must be in lower case Only.";
    e.preventDefault();
  } else {
    form.submit();
  }
});

// const form = document.getElementById("contact-form");
// //const email = document.getElementById("email-address");
// const email_invalid = "Email MUST be in lower case only!"

// function validateEmail(email){
//   if(email.value.trim() === email.value.trim().toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!validateEmail(form.elements["contact-email"])){
//     return email_invalid;
//   } else {
//     form.submit();
//   }
// })

// function showMessage(error, type){
//   const errorMsg = document.getElementById("error");
//   errorMsg.className = type ? "success" : "error";
//   errorMsg.innerText = "Email must be in lower case only";
//   return type;
// }

// function showError(emailInput, errorMsg){
//   return showMessage(emailInput, errorMsg, false)
// }

// function validateEmail(emailInput, errorMsg) {
//   const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//   const inputEmail = email.value.trim();

//   if (!emailRegex.test(inputEmail)){
//     return showError(emailInput, errorMsg)
//   }
//   return true;
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const emailValid = validateEmail(form.elements.email, email_invalid)

//     if (emailValid){
//       form.submit();
//   }
// })



window.addEventListener('load', getCards());

