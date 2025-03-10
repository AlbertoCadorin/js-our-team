const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);

/*
 <div class="team-member">
                <div class="member">
                    <img src="img/male1.png" alt="Marco Bianchi">
                </div>
                <div class="info">
                    <h3>Marta Ipsum</h3>
                    <p>SEO Specialist</p>
                    <a href="#">laurarossi@team.com</a>
                </div>
            </div>
*/

const teamMembersElement = document.getElementById('team-card');
let result = '';

for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i]
 
  result += `
              <div class="team-member">
                <div class="member">
                    <img src="${img}" alt="Marco Bianchi">
                </div>
                <div class="info">
                    <h3>${name}</h3>
                    <p>${role}</p>
                    <a href="#">${email}</a>
                </div>
              </div>`
}
teamMembersElement.innerHTML = result;
// richiamo del form 
const memberFormElement = document.getElementById('member-form');
const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const imgElemnt = document.getElementById('img')

memberFormElement.addEventListener('submit', addNewMember)


// FUNZIONI //

function addNewMember(event){
  event.preventDefault();
  console.log('ciaooooooooooooo')
}