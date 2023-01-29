function jazzloaded(){
var volume=document.getElementById("volume");
var speed=document.getElementById("playspeed");
var audio=document.getElementById("music");
var speedOut = document.getElementById("speedOut");
var volumeOut = document.getElementById("volumeOut");
console.log("ples work");
console.log(audio.volume);
console.log(audio.playbackRate);

console.log(volume.value);
console.log(speed.value);

audio.volume=volume.value*0.01;
audio.playbackRate=speed.value;
volumeOut.textContent=volume.value+"%";
speedOut.textContent=speed.value+"X";

var audio=document.getElementById("music2");
audio.volume=volume.value*0.01;
audio.playbackRate=speed.value;
volumeOut.textContent=volume.value+"%";
speedOut.textContent=speed.value+"X";

}