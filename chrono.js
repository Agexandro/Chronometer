window.onload = () => {
    let $hours = 0,
        $mins = 0,
        $seconds = 0;
    let isStarted = false;
    let start;
    const $intervalTime = 1000; //set time interval to 1 second

    //gets chrono container from DOM
    const $timeContainer = document.getElementById("chrono");
    //gets bottons
    const $playBtn = document.getElementById("play");
    const $resetBtn = document.getElementById("reset");

    //Creates time containers
    const $hourElement = document.createElement("span");
    const $minsElement = document.createElement("span");
    const $secondsElement = document.createElement("span");

    //Adds time containers into time container
    $timeContainer.appendChild($hourElement);
    $timeContainer.appendChild($minsElement);
    $timeContainer.appendChild($secondsElement);


    //Formats Time
    function formatTime(unitOfTime) {
        return unitOfTime < 10 ? "0" + unitOfTime : unitOfTime;
    }

    //adds respective time to time containers
    function updateTimeElements() {
        $hourElement.innerHTML = formatTime($hours);
        $minsElement.innerHTML = formatTime($mins);
        $secondsElement.innerHTML = formatTime($seconds);
    }

    updateTimeElements();

    //Updates time
    function countTime() {
        $seconds++;
        //seconds reach 60?
        if ($seconds == 60) {
            $mins++;
            $seconds = 0;
            //mins reach 60?
            if ($mins == 60) {
                $mins = 0;
                $hours++;
            }
        }
        //Updates time fields
        updateTimeElements();
    }

    //starts the chronometer
    function startCount() {
        start =
            //Updates time and time containers every second
            setInterval(
                countTime
                , $intervalTime);
    }

    //Pauses chrono
    function stopCount() {
        clearInterval(start);
    }

    $playBtn.onclick = () => {
        isStarted = !isStarted;
        //The count has started?
        if (isStarted) {
            startCount();
        } else {
            stopCount();
        }
    }
}