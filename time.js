function updateTime() {
    // Get the current time in the local timezone
    var now = new Date();

    // Convert it to the Hong Kong timezone
    var nowHongKong = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"}));

    // Get the target time (18:30) in the Hong Kong timezone
    var target = new Date(nowHongKong);
    target.setHours(18, 0, 0, 0);

    // If the current time is after 18:30, use the target time for the next day
    if (nowHongKong.getTime() > target.getTime()) {
        target.setDate(target.getDate() + 1);
        var diff = 0;  
    }   else{
        var diff = target - nowHongKong;    
    }

    // Calculate the time difference (in milliseconds)
    

    // Convert the time difference to hours, minutes, and seconds
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var mins = Math.floor(diff / 1000 / 60);
    diff -= mins * 1000 * 60;
    var secs = Math.floor(diff / 1000);

    // Update the webpage
    if(diff > 0)
    {document.getElementById("time_difference").textContent = 
        "You still have to work for : " + hours + " hours " + mins + " minutes " + secs + " seconds";
    } else
    {
        document.getElementById("time_difference").textContent = "Finally Done! Bye Bye~";
    }

    // Update the time every second
    setTimeout(updateTime, 1000);
}

// Start the first update
updateTime();
