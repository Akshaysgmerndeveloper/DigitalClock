
import React, {useState,useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        }

    },  []);

     function formatTime(){
        let Hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = Hours >= 12  ? "PM" : "AM";
        

        Hours = Hours % 12 || 12;

        return `${padZero(Hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`;

     }
       function padZero(number){
             return(number < 10 ? "0" : "") + number;
       }

       return(
         <div className="clock-container">
            <div classname="clock">
                <span>{formatTime()}</span>
            </div>
    </div>
    );
}
export default DigitalClock;