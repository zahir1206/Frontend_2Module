// const currentTime=document.querySelector("#alarm");
// const upcomingAlarmList=document.getElementById("upcoming-alarms-list");

const display=document.getElementById("clock");
const audio=new Audio("H:\Alarm App\gun-sound-cs-61255.mp3");
const hourHtml=document.getElementById("hourHtml");
const minHtml=document.getElementById("minutesHtml");

audio.loop=true;

let alarmTime=null;
let alarmTimeout=null;

// const addAlarm=document.querySelector("#alarm");


function updateTime(){
    const date=new Date();
    const hour=formatTime(date.getHours());
    const minutes=formatTime(date.getMinutes());
    const seconds=formatTime(date.getSeconds());
    display.innerText=hour+ ":" +minutes+ ":"+ seconds;

    // currentTime.innerText=="${hour}:${minutes}:${seconds}";

    // if(alarmList.includes(realTime)){
    //     ring(realTime);
    // }
}

function formatTime(time){
    if(time<10){
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime=value;
}
function setAlarm(){
    if(alarmTime){
        const current=new Date();
        const timeToAlarm=new Date(alarmTime);
        alert("Alarm Set");
        if(timeToAlarm>current){
            const timeout=timeToAlarm.getTime()-current.getTime();
            alarmTimeout=setTimeout(function(){             
                audio.play();
            },timeout);
        }
    }
}
    // let h=hoursHtml.value;
    // let m=minutesHtml.value;
    // setAlarmtime.innerHTML=h+ ":"+ m + ":00";
        // alert("Alarm Set");


function clearAlarm(){
    audio.pause();
    if(alarmTime){
        clearTimeout(alarmTime);
        alert('Alarm cleared')
    }
}

// setInterval(updateTime, 1000);

// upcomingAlarmList.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("deleteAlarm")){
//         e.target.parentElement.remove();
//     }
// });

// remove=(value)=>{
//     let newList=alarmList.filter((time)=>time!=value);
//     alarmList.length=0;
//     alarmList.push.apply(alarmList, newList);
// }

// function addNewAlarm(newAlarm){
//     const html=
//         // <li time-list>
//         //     <div class="delete-alarm">
//         //         <div class="time-left">Time Left :</div>
//         //         <div class="time">${newAlarm}</div>
//         //         <button class="deleteAlarm" onclick="remove(this.value)" value={newAlarm}>Delete</button>
//         //     </div>
       
//         // </li>
//        "<li class="time-list">
//             <span class="time">${newAlarm}</span>
//             <button class="deleteAlarm"  onclick="remove(this.value)" value=${newAlarm}>Delete</button>
//         </li>"
//         upcomingAlarmList.innerHTML+=html;
// }

// addAlarm.addEventListener("submit", (event)=>{
//         event.preventDefault();

//         let hour=formatTime(addAlarm.alarmTime.value);
//         if(hour=="0"){
//             hour="00";
//         }

//         let minute=formatTime(addAlarm.alarmTime.value);
//         if(minute=="0"){
//             minute="00";
//         }

//         let second=formatTime(addAlarm.alarmTime.value);
//         if(second=="0"){
//             second="00";
//         }

//         const newAlarm="${hour}:${minute}:${second}"

//         if(isNaN(newAlarm)){
//             if(!alarmList.includes(newAlarm)){
//                 alarmList.push(newAlarm);
//                 addNewAlarm(newAlarm);
//                 addAlarm.reset();
//             }else{
//                 alert("Alarm for $(newAlarm) already set.");
//             }
//         }else{
//             alert("Invalid Time Entered");
//         }
// })

setInterval(updateTime, 1000);