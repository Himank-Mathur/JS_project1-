let timer;
let seconds = 0;

function formatTime(sec) {          //to transform a date and time value into a specific string format
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');    //it's use to generate a new string
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

document.getElementById('start').addEventListener('click', () => {      //to atach an event handeler 
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('display').textContent = formatTime(seconds);   //to access specific element and hendle time zone
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById('display').textContent = formatTime(seconds);
});