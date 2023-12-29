import React, { useState } from 'react';

function TimeSlot() {

    const [slot,setSlot]=useState(["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","16:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"])
    return (
        <div className="timeline">
            <ul>
                {
                    slot.map((item,index)=><li><span>{item}</span></li>)
                }

            </ul>
        </div>
    );
}

export default TimeSlot;
