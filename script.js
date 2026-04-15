let yearcountbtn = document.getElementById('yearcount');
let hertaBox = document.getElementById('hertaBox');
let age = document.getElementById('age')
let agebefore = document.getElementById('agebefore')
let ageafter = document.getElementById('ageafter')
let agebox = document.getElementById('agebox')

let year = 0;
yearcountbtn.addEventListener('click', spawnHerta);

const audio = document.getElementById('bgm');
const confettiAudio = document.getElementById('confetti');
const slider = document.getElementById('volumeSlider');

const newheader = document.createElement("h1");
newheader.id = "ageappend"

slider.addEventListener('input', (event) => {
  audio.volume = event.target.value;
});

function spawnConfetti(){
  confetti({
    particleCount: 1000,
    spread: 1250,
    origin: { y: 0.5 }
  });
  confettiAudio.play();
}

function spawnHerta() {
  bgm.play();
  year++;
  age.innerHTML = year;
  const newHerta = document.createElement('img');
  newHerta.src = 'hertas/herta-spinning.gif';
  newHerta.id = 'herta' + year;
  newHerta.className = 'herta';
  console.log(newHerta);
  hertaBox.appendChild(newHerta);

  if (year > 19)
  {
    agebefore.innerHTML = "You are soon to be...";
    ageafter.innerHTML = "years old! Oldie!"
    agebox.appendChild(newheader);
    newheader.innerHTML = "Happy Birthday Deppi!! Also here's some nitro: https://discord.gift/S7vC5MYvGZjuSQXh (copy it into your discord) (if it doesn't work please contact me)"
    spawnConfetti();
  }
  else if (year == 19)
  {
    ageafter.innerHTML = "years old! Happy Birthday Deppi!!"
    spawnConfetti();
  }

}


