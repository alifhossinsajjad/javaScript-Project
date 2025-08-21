 function myTime() {
      const myDate = new Date();

      let hr = myDate.getHours();
      const min = String(myDate.getMinutes()).padStart(2, "0");
      const sec = String(myDate.getSeconds()).padStart(2, "0");
      const M = hr >= 12 ? "PM" : "AM";

      // 12-hour conversion
      hr = hr % 12 || 12;
      const hh = String(hr).padStart(2, "0");

      // Set time and AM/PM
      document.querySelector(".H").textContent = `${hh}:${min}:${sec}`;
      document.querySelector(".M").textContent = M;

      // Date parts
      const myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const myMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      const day = myDay[myDate.getDay()];
      const date = myDate.getDate();
      const month = myMonth[myDate.getMonth()];
      const year = myDate.getFullYear();

      document.querySelector(".date").textContent = `${day}, ${date} ${month} ${year}`;
    }

    myTime();
    setInterval(myTime, 1000);