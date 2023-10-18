let [seconds, minutes, hours] = [0, 0, 0];
        let displayTime = document.getElementById("displayTime");
        let timer = null;
        let lapList = document.getElementById("lapList");

        function stopwatch() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            displayTime.innerHTML = h + ":" + m + ":" + s;
        }

        function watchstart() {
            if (timer !== null) {
                clearInterval(timer);
            }
            timer = setInterval(stopwatch, 1000);
        }

        function watchstop() {
            clearInterval(timer);
        }

        function watchreset() {
            clearInterval(timer);
            [seconds, minutes, hours] = [0, 0, 0];
            displayTime.innerHTML = "00:00:00";
            lapList.innerHTML = "";
        }

        function watchlap() {
            let lapTime = displayTime.innerHTML;
            let lapItem = document.createElement("li");
            lapItem.textContent = lapTime;
            lapList.appendChild(lapItem);
        }