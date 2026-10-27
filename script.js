const audio = document.getElementById('player');
const playButton = document.querySelector('.player_button-play');
const pauseButton = document.querySelector('.player_button-pause');
const playlistLinks = document.querySelectorAll('.playlist_item a');
const progressBar = document.querySelector('.player_progress-bar');

playlistLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const songSrc = item.getAttribute('data-src');
        if (!songSrc) return;

        audio.src = songSrc;
        audio.load(); 

        audio.play()
            .then(() => console.log(`Tocando: ${songSrc}`))
            .catch(error => {
                console.error("Erro ao tocar:", error);
                alert(`Erro ao carregar o arquivo:\n"${songSrc}"\n\nVerifique se o nome do arquivo e da pasta 'songs' estão escritos exatamente iguais no seu computador.`);
            });

        playlistLinks.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

playButton.addEventListener('click', () => {
    if (audio.src && audio.src !== window.location.href) {
        audio.play().catch(err => console.error("Erro no play:", err));
    } else {
        if (playlistLinks.length > 0) {
            playlistLinks[0].click(); 
        }
    }
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    }
});

const databaseMusicas = {
    "505": {
        cover: "images/505.jpg",
        about: "505 é a faixa de encerramento do álbum Favourite Worst Nightmare (2007) do Arctic Monkeys.",
        lyrics: `I'm going back to 505
                 If it's a seven-hour flight or a forty-five minute drive
                 In my imagination, you're waiting lyin' on your side
                 With your hands between your thighs...`
    },
    "wonderwall": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },

    "seeyouagain": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
"shouldvesaidit": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
"havana": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
"lunch": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
"notlikeus": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
"virtualinsanity": {
        cover: "images/wonderwall.jpg",
        about: "Wonderwall foi lançada em 1995 e se tornou a música assinatura da banda britânica Oasis.",
        lyrics: `Today is gonna be the day that they're gonna throw it back to you
                 By now, you should've somehow realized what you gotta do
                 I don't believe that anybody feels the way I do about you now...`
    },
};

const audioPlayer = document.getElementById('player');
const infoPanel = document.getElementById('music-info-panel');
const panelCover = document.getElementById('panel-cover');
const panelTitle = document.getElementById('panel-title');
const panelLyrics = document.getElementById('panel-lyrics');
const panelAbout = document.getElementById('panel-about');

const playlistLink = document.querySelectorAll('.playlist_item a');

playlistLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const songSrc = this.getAttribute('data-src');
        audioPlayer.src = songSrc;
        audioPlayer.play();

        const songId = this.getAttribute('data-song-id');
        const dadosDaMusica = databaseMusicas[songId];

        if (dadosDaMusica) {
            panelTitle.innerText = this.innerText;
            panelCover.src = dadosDaMusica.cover;
            panelAbout.innerText = dadosDaMusica.about;
            panelLyrics.innerText = dadosDaMusica.lyrics;

            infoPanel.style.display = 'block';
        } else {
            panelTitle.innerText = this.innerText;
            panelCover.src = "images/default.jpg";
            panelAbout.innerText = "Informações não cadastradas.";
            panelLyrics.innerText = "Letra não disponível.";
            infoPanel.style.display = 'block';
        }
    });
});