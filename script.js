console.log("welcometo sportify");
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName:"salam-1", filepath:"song/1.mp3" ,coverpath:"covers/1.jpg"},
    {songName:"salam-2", filepath:"song/2.mp3" ,coverpath:"covers/2.jpg"},
    {songName:"salam-3", filepath:"song/3.mp3" ,coverpath:"covers/3.jpg"},
    {songName:"salam-4", filepath:"song/4.mp3" ,coverpath:"covers/4.jpg"},
    {songName:"salam-5", filepath:"song/5.mp3" ,coverpath:"covers/5.jpg"},
    {songName:"salam-6", filepath:"song/6.mp3" ,coverpath:"covers/6.jpg"},
    {songName:"salam-7", filepath:"song/7.mp3" ,coverpath:"covers/7.jpg"},
    {songName:"salam-8", filepath:"song/8.mp3" ,coverpath:"covers/8.jpg"},
    {songName:"salam-9", filepath:"song/9.mp3" ,coverpath:"covers/9.jpg"},
    {songName:"salam-10", filepath:"song/10.mp3" ,coverpath:"covers/10.jpg"}, 
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
   element.getElementsByTagName("img")[0].src = songs[i].coverpath;
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listion to event
audioElement.addEventListener('timeupdate',()=>{
    console.log("time update");
    //update seekbar
    progres= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progres;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songIndex}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})

// next button work
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=1;
    }else{
    songIndex+=1;
    }
    audioElement.src=`song/${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//  previous button work
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }else{
    songIndex-=1;
    }
    audioElement.src=`song/${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;+-+
    // audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})