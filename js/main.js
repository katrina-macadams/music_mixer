//variables

let soundBoard = document.querySelector(".sound_boards"), //puzzleBoard
    seaSound = document.querySelectorAll('img'), //puzzlePieces
    slotContainer = document.querySelectorAll(".slot_cont"),    
    soundContainer = document.querySelector(".sound_cont"), //pieceContainer
    slotZone = document.querySelectorAll('.sand_box'), //dropZone

    soundIcons = document.querySelectorAll("#sounds img"),
    theAudioEl = document.querySelector('#audioEl'),
    pauseButton = document.querySelector('#pause'),
    resetButton = document.querySelector('#reset'),
    helpButton = document.querySelector('#help'),


    draggedSound; //draggedPiece

    
//functions

// drag n drop

function resetSounds() {
    slotZone.forEach (zone => {
        if (zone.firstElementChild) {
            soundContainer.appendChild(zone.firstElementChild);
        }
    });
}

function handleStartDrag() {
    console.log('started dragging this piece:', this);

    draggedSound = this; 
}

function handleDragOver(e) {
        e.preventDefault();
        console.log('dragged over me'); 
}

function handleDrop(e) {
    e.preventDefault(); 
    console.log('dropped something on me')
    if (this.firstElementChild) {
        return;
    }

    this.appendChild(draggedSound); 
}

// audio 

function loadAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    theAudioEl.src = currentSrc;    
    theAudioEl.load();

    playAudio();
}

function playAudio() { 
    theAudioEl.play(); 
}
function restartAudio() { 
    theAudioEl.currentTime = 0; 
    playAudio(); 
}

function pauseAudio() { 
    theAudioEl.pause(); 
}




//eventlisteners

seaSound.forEach(sound => sound.addEventListener ("dragstart", handleStartDrag)); 

slotZone.forEach(zone => zone.addEventListener("dragover", handleDragOver)); 

slotZone.forEach(zone => zone.addEventListener("drop", handleDrop)); 

soundIcons.forEach(icons => icons.addEventListener('click', loadAudio)); 