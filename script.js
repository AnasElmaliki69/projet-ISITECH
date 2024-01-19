const nav = document.querySelector('.navbar')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
/* test vidéo */ 

var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");

 

function playAndPause () {

if (video.paused) {

video.play();

btn.innerHTML = "Pause II";

} else {

video.pause();

btn.innerHTML = "Play ▶";

}

}