console.log("welcome to my code")
//initiaylize the variables

let songIndex = 0;
let audioElement = new Audio("./mp3/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let song = [
    {
        filePath: "./mp3/1.mp3", songName: "Salameishq"
    },


    {
        songName: "Mohbataishq",
        filePath: "./mp3/2.mp3"
    },
    {
        songName: "Puranaishq",
        filePath: "./mp3/3.mp3"
    }
    , {
        songName: "Nayaishq",
        filePath: "./mp3/4.mp3"
    }
    , {
        songName: "ganaishq",
        filePath: "./mp3/0.mp3"
    }
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].filePath;

})



// audioElement.play()




//handplePlabutton
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        // masterPlay.classList.remove("fa-circle-pause");
        // masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})

//listen to events


audioElement.addEventListener("timeupdate", () => {
    console.log("timeUpdate");
    //update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `./mp3/${songIndex + 1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;


        // audioElement.src = "./mp3/1.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");



    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 5) {
        songIndex = 0;

    }
    else {
        songIndex += 1;

    }

    audioElement.src = `./mp3/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;


    // audioElement.src = "./mp3/1.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");


})


document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;

    }
    else {
        songIndex -= 1;

    }

    audioElement.src = `./mp3/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;

    // audioElement.src = "./mp3/1.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");


})