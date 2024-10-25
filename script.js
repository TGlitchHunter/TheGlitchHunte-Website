let player;

//https://youtu.be/TlM7ozA3-LE

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '600',
        width: '100%',
        videoId: 'TlM7ozA3-LE', // ID do vídeo
        playerVars: {
            'autoplay': 0,
            'controls': 1
        }
    });
}
