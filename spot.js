function togglelogin() {
  const loginBox = document.getElementById('loginBox');
  loginBox.style.display = loginBox.style.display === "block" ? "none" : "block";
}

function togglesearch() {
  const searchbox = document.getElementById('searchbox');
  searchbox.style.display = searchbox.style.display === "block" ? "none" : "block";
}

function togglesong1() {
  const songbox = document.getElementById('songbox');
  songbox.style.display = songbox.style.display === "block" ? "none" : "block";
}
function togglesong2() {
  const songBox = document.getElementById('songBox');
  songBox.style.display = songBox.style.display === "block" ? "none" : "block";
}


function togglecreate() {
  const newPlaylist = document.getElementById('newPlaylist');
  newPlaylist.style.display = newPlaylist.style.display === "block" ? "none" : "block";
}



// Global audio instances
const audio = new Audio();
const audio1 = new Audio();

const songPanel = document.getElementById('songPanel');
const panelCover = document.getElementById('panelCover');
const panelTitle = document.getElementById('panelTitle');
const panelArtist = document.getElementById('panelArtist');

const playBtns = document.querySelectorAll('.play-btn');
let currentBtn = null;

// 🎵 Main song card buttons
playBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    const cover = btn.getAttribute('data-cover');

    const card = btn.closest('.songcard');
    const title = card.querySelector('.song-title')?.textContent || 'Unknown';
    const artist = card.querySelector('.song-artists')?.textContent || 'Unknown';

    const isSame = audio.src.includes(src);

    // Pause if already playing
    if (isSame && !audio.paused) {
      audio.pause();
      btn.textContent = '▶';
      songPanel.classList.remove('active');
      return;
    }

    // Pause other audio if playing
    audio1.pause();
    if (currentBtn1) currentBtn1.textContent = '▶';

    // Play this audio
    audio.src = src;
    audio.play();

    panelCover.src = cover;
    panelTitle.textContent = title;
    panelArtist.textContent = artist;
    songPanel.classList.add('active');

    if (currentBtn) currentBtn.textContent = '▶';
    btn.textContent = '⏸';
    currentBtn = btn;
  });
});

audio.addEventListener('ended', () => {
  if (currentBtn) currentBtn.textContent = '▶';
  songPanel.classList.remove('active');
});


// 🎵 Special "play1" button (independent)
const play1 = document.querySelector('.play1');
let songPanel1 = document.getElementById('songPanel');
let currentBtn1 = null;

play1.addEventListener('click', (e) => {
  const btn = e.currentTarget;
  
  
  // Pause other audio if playing
  audio.pause();
  if (currentBtn) currentBtn.textContent = '▶';
 songPanel1.classList.remove('active');
 
});

audio1.addEventListener('ended', () => {
  if (currentBtn1) currentBtn1.textContent = '▶';
  songPanel1.classList.remove('active');
});




document.querySelector(".hamburger").addEventListener("click", () => 
  { document.querySelector(".left").style.left= "0"});

document.querySelector(".card-container").addEventListener("click", () => 
  { document.querySelector(".left").style.left= "0"});

document.querySelector(".close-btn").addEventListener("click", () => 
  { document.querySelector(".left").style.left= "-100%"});


