function updateClock(){
    const now = new Date();
    let hour = now.getHours();
    const ampm = hour >=12 ? "PM": "AM";
    hour = hour%12 || 12;
    const min  = now.getMinutes();
    const sec = now.getSeconds();
    const timeString = `${hour}:${min}:${sec} ${ampm}`;

    document.getElementById("clock").textContent = timeString;

    console.log(now);
}

updateClock();
setInterval(updateClock, 1000);