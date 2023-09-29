const skillsClick = document.getElementById('skillsButton');
const bgClick = document.getElementById('backgroundButton');
const expClick = document.getElementById('experienceButton');
const eduClick = document.getElementById('educationButton');

function skillsClickFunc() {
  document.getElementById('skills').style.display = 'block';
  document.getElementById('background').style.display = 'none';
  document.getElementById('experience').style.display = 'none';
  document.getElementById('education').style.display = 'none';
}

function bgClickFunc() {
  document.getElementById('background').style.display = "block";
  document.getElementById('skills').style.display = 'none';
  document.getElementById('experience').style.display = 'none';
  document.getElementById('education').style.display = 'none';
}

function expClickFunc() {
  document.getElementById('skills').style.display = 'none';
  document.getElementById('background').style.display = 'none';
  document.getElementById('experience').style.display = 'block';
  document.getElementById('education').style.display = 'none';
}

function eduClickFunc() {
  document.getElementById('skills').style.display = "none";
  document.getElementById('background').style.display = 'none';
  document.getElementById('experience').style.display = 'none';
  document.getElementById('education').style.display = 'block';
}

skillsClick.addEventListener('click', skillsClickFunc);
bgClick.addEventListener('click',bgClickFunc);
expClick.addEventListener('click',expClickFunc);
eduClick.addEventListener('click',eduClickFunc);