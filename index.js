const personalCard = document.getElementById('personal');
const projectsCard = document.getElementById('projects');
const techCard = document.getElementById('tech');
const header = document.getElementById('header');
const text = document.getElementById('text');


personalCard.addEventListener("click", () => {
  header.innerHTML = 'Personal';
  text.innerHTML = 'This is gunna be some personal stuff'
});
projectsCard.addEventListener("click", () => {
  header.innerHTML = 'Projects';
  text.innerHTML = 'this is crazy'
});
techCard.addEventListener("click", () => {
  header.innerHTML = 'Tech';
  text.innerHTML = 'this is eve crazuer and holy wow'
});