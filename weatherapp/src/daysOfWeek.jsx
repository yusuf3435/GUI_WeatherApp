import React, {useState, useEffect} from 'react';

 
function DaysOfWeek(){
 
    // Array of short form days of the week
    const daysOfWeekShort = ["S", "M", "T", "W", "TH", "F", "S"];

    // Get the current date
    const currentDate = new Date();

    //Get current date class used for rerendering
    const update = document.getElementsByClassName("dateOfWeek-current");

    useEffect(() => {
        // Force a re-render by updating the state to its current value
        // No need to update any state so will leave empty
    }, [update]);

    // Calculate the start date of the current week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());


    
    // Calculate the dates for the entire week
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        weekDates.push(date.getDate());
    }

    return(

        <div className="days">{/* Iterate over the days and render each one */}
                        {daysOfWeekShort.map((day, index) => (

                            <span key={index} className="day-date">
                                <p className="dayOfWeek">{day}</p>
                                <p className={`dateOfWeek${index === currentDate.getDay() ? '-current' : ''}`}>{weekDates[index]}</p>
                            </span>
                        
                        ))}
        </div>            

    )
}

export default DaysOfWeek;