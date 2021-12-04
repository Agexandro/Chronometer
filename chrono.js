window.onload = () => {
    let $hour = 0,
        $mins = 0,
        $seconds = 0,
        $intervalTime = 1000; //set time interval to 1 second

    //Creates time containers
    let $hourElement = document.createElement("span");
    let $minsElement = document.createElement("span");
    let $secondsElement = document.createElement("span");

    //gets main container from DOM
    let $timeContainer = document.getElementById("chrono");

    //Adds time containers into time container
    $timeContainer.appendChild($hourElement)
    $timeContainer.appendChild($minsElement)
    $timeContainer.appendChild($secondsElement)

    function countTime() {
        updateTimeElements();
        $seconds++;
        //seconds reach 60?
        if ($seconds == 60) {
            $mins++;
            $seconds = 0;
            //mins reach 60?
            if ($mins == 60) {
                $mins = 0;
                $hour++;
            }
        }
    }

    //adds respective time to time containers
    function updateTimeElements() {
        $hourElement.innerHTML = $hour;
        $minsElement.innerHTML = $mins;
        $secondsElement.innerHTML = $seconds;
    }

    //Updates time and time containers every second
    setInterval(() => {
        countTime();
    }, $intervalTime);
}