/* Homepage Functions */
function on() {
  document.getElementById("overlay").style.display = "block";
}
 function off() {
  document.getElementById("overlay").style.display = "none";
}


/* Dynamic Project Functions */
function projectOn() {
  document.getElementById("output").style.display = "block";
}

function projectOff() {
  document.getElementById("output").style.display = "none";
}


function getProjectOne() {
  projectOn();
fetch("projects.json")
.then((res) => res.json())
.then((data) => {
 output = `
 <!--Empty div for the overley effect-->
 <div class="project_overlay">
 </div>
 
  <div class="project_structure_overlay">
  <div class="project_header"> 
      
      <div class="project_heading_overlay">
              <h2 class="title_overlay"> ${data[0].name} </h2>
              <ul class="project_body_title_list">
                  <li class="title_list_main_overlay">${data[0].projectClient}</li>
                  <img src="./Assets/Counter.png" alt="" style="margin-right:3%">
                  <li>${data[0].projectInfo[0]}</li>
                  <img src="./Assets/Counter.png" alt="" style="margin-right:3%">
                  <li>${data[0].projectInfo[1]}</li>
              </ul>
      </div>
      <div>
      <button onclick="projectOff()">X</button>
  </div>

      </div>
<div> <img class="image_ovlerlay" src=${data[0].image} alt="snapshoot"> </div>  
      <div class="project_body_overlay">
          <div class="text_group_overlay">
              <p>${data[0].mainText}</p>
          </div>
              <hr>
          <div class="btn_group_overlay">
          <ul class="project_tech_overlay">
                  <li>${data[0].technologies[0]}</li>
                  <li>${data[0].technologies[1]}</li>
                  <li>${data[0].technologies[2]}</li>
              </ul>
              <button onclick=window.open(${data[0].liveVersionLink[1]}) class="overlay_btn"> See Live <img src="./Assets/github.svg" > </button>
              <button onclick=window.open(${data[0].linkToSource[1]}) class="overlay_btn"> See Source <img src="./Assets/github.svg" > </button>
          </div>
      </div>
 
  </div>
`;

  document.getElementById("output").innerHTML = output;
});
}
