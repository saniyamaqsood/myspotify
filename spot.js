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


const playBtns = document.querySelectorAll('.play-btn');
const audio = new Audio();

const songPanel = document.getElementById('songPanel');
const panelCover = document.getElementById('panelCover');
const panelTitle = document.getElementById('panelTitle');
const panelArtist = document.getElementById('panelArtist');

let currentBtn = null;

playBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    const cover = btn.getAttribute('data-cover');

    const card = btn.closest('.songcard');
    const title = card.querySelector('.song-title')?.textContent || 'Unknown';
    const artist = card.querySelector('.song-artists')?.textContent || 'Unknown';

    const isSame = audio.src.includes(src);


    if (isSame && !audio.paused) {
      audio.pause();
      btn.textContent = '▶';
      songPanel.classList.remove('active');
      return;
    }

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

