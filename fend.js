const btn = document.querySelectorAll('.btn');
const play = document.querySelector('#play')
let durat = document.querySelector('#durat');
let ctr = 0;
let elem = document.createElement('audio')

let b = document.querySelectorAll('#songlist span')[0].innerHTML;
document.querySelector('#interface span').innerHTML = b;

let attr = document.querySelectorAll('#songlist audio')[0].getAttribute('src')
elem.setAttribute('src', attr)
document.querySelector('#interface').appendChild(elem);

play.addEventListener('click', () => {
    if (elem.paused && play.getAttribute('class') == 'fa-solid fa-3x fa-circle-play') {
        elem.play()
        play.setAttribute('class', 'fa-solid fa-3x fa-circle-pause')
        show()
    }

    else {
        elem.pause()
        play.setAttribute('class', 'fa-solid fa-3x fa-circle-play')
        hide()
    }


})

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', () => {
        stop()
        add(play);
        let b = document.querySelectorAll('#songlist span')[i].innerHTML;
        document.querySelector('#interface span').innerHTML = b;
        let attr = document.querySelectorAll('#songlist audio')[i].getAttribute('src')
        elem.setAttribute('src', attr)
        document.querySelector('#interface').appendChild(elem);
        elem.play()
        ctr = i;
        show()

    });

}

function add(v) {
    v.setAttribute('class', 'fa-solid fa-3x fa-circle-pause')
}

function stop() {
    for (let i = 0; i < btn.length; i++) {
        if (!document.querySelectorAll('#songlist audio')[i].paused)
            document.querySelectorAll('#songlist audio')[i].pause()

    }
}

function start() {
    for (let i = 0; i < btn.length; i++) {
        if (document.querySelectorAll('#songlist audio')[i].paused)
            document.querySelectorAll('#songlist audio')[i].play()
        else
            document.querySelectorAll('#songlist audio')[i].play()
    }
}

elem.addEventListener('timeupdate', () => {
    durat.value = (elem.currentTime / elem.duration) * 100
})

durat.addEventListener('input', () => {
    elem.currentTime = durat.value * elem.duration / 100
})

document.querySelector('#forward').addEventListener('click', () => {
    if (ctr == 9)
        ctr = -1
    stop()
    add(play);
    let b = document.querySelectorAll('#songlist span')[ctr + 1].innerHTML;
    document.querySelector('#interface span').innerHTML = b;
    let attr = document.querySelectorAll('#songlist audio')[ctr + 1].getAttribute('src')
    elem.setAttribute('src', attr)
    document.querySelector('#interface').appendChild(elem);
    elem.play()
    ctr = ctr + 1
    show()
})

document.querySelector('#backward').addEventListener('click', () => {
    if (ctr == 0)
        ctr = 10
    stop()
    add(play);
    let b = document.querySelectorAll('#songlist span')[ctr - 1].innerHTML;
    document.querySelector('#interface span').innerHTML = b;
    let attr = document.querySelectorAll('#songlist audio')[ctr - 1].getAttribute('src')
    elem.setAttribute('src', attr)
    document.querySelector('#interface').appendChild(elem);
    elem.play()
    ctr = ctr - 1
    show()

})

elem.addEventListener('ended', () => {
    play.setAttribute('class', 'fa-solid fa-3x fa-circle-play')
    hide()

})

function show() {
    document.querySelector('#item2 img').style.display = 'inline';
}

function hide() {
    document.querySelector('#item2 img').style.display = 'none';
}

