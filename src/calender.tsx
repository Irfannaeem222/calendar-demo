import React from 'react';
import CalanderHeader from './components/calanderHeader';
import RedLine from './components/redLine';
import TimeSlot from './components/timeslote';
import SlotTable from './components/slotTable';

function Calander() {

    return (
        <div className="calender-container">
            <br />
            <CalanderHeader />
            <div className="cd-schedule loading pt-5">
                <RedLine />
                <TimeSlot />
                <SlotTable />
            </div>
        </div>
    );
}

export default Calander;
