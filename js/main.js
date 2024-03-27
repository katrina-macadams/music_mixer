//variables

let soundBoard = document.querySelector(".sound_boards"), //puzzleBoard
    seaSound = document.querySelectorAll('sound_cont img'), //puzzlePieces
    slotContainer = document.querySelectorAll(".slot_cont"),    
    soundContainer = document.querySelector(".sound_cont"), //pieceContainer
    slotZone = document.querySelectorAll('.sand_box'), //dropZone


    draggedSound; //draggedPiece
    
//functions

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



//eventlisteners

seaSound.forEach(sound => sound.addEventListener ("dragstart", handleStartDrag)); 

slotZone.forEach(zone => zone.addEventListener("dragover", handleDragOver)); 

slotZone.forEach(zone => zone.addEventListener("drop", handleDrop)); 
