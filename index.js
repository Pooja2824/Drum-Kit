const audioQuery = document.querySelector(`audio[data-key]`)
console.log('Before: ',audioQuery)
document.addEventListener('keydown', function (event) {
    const audioFiles = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    console.log('After: ',audioFiles)

    const keyFiles = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if (!audioFiles)
        return;
    //console.log(keyFiles);
    audioFiles.currentTime = 0;
    audioFiles.play();
    keyFiles.classList.add('playing')
})

function removeTransition(e) {
    if (e.propertyName != 'transform')
        return;
    //console.log(this);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition))