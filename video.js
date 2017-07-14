window.addEventListener('load', video_player_functionality, false);

function video_player_functionality(){ //Access HTML elements
    barSize=1000; // Width of default bar
    testVideo=document.getElementById('TestVideo');
    playButton=document.getElementById('PlayButton');
    defaultBar=document.getElementById('DefaultBar');
    progressBar=document.getElementById('ProgressBar');

    playButton.addEventListener('click', playButton_clicked, false);
    defaultBar.addEventListener('click', defaultBar_clicked, false);
}

function playButton_clicked(){
    if(!testVideo.paused && !testVideo.ended){
        testVideo.pause();
        playButton.innerHTML='Play';
        window.clearInterval(updateBar);
    }else{
        testVideo.play();
        playButton.innerHTML='Pause'; //Changes button text to pause
        updateBar = setInterval(update_progressBar, 100);
    }
}

function update_progressBar(){
    if(!testVideo.ended){//Checks if video is playing or not
        var videoLength=parseInt(testVideo.currentTime * barSize/testVideo.duration);
        progressBar.style.width=videoLength+'px'; // Calculates length of bar in pixels
    }else{
        progressBar.style.width='0px';
        playButton.innerHTML='Play';
        window.clearInterval(updateBar); // Clears progress bar
    }
}

function defaultBar_clicked(mouse_position){
    if(!testVideo.paused && !testVideo.ended){
        var mouse_horizontal_position = mouse_position.pageX-defaultBar.offsetLeft;
        var new_position = mouse_horizontal_position*testVideo.duration/barSize;
        testVideo.currentTime=new_position;
        progressBar.style.width=mouse_horizontal_position+'px';
    }
}



