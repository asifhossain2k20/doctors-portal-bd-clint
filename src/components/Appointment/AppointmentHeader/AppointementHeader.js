import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png'
const AppointementHeader = ({handleDateChange}) => {
    
    return (
        <main className="row d-flex align-items-center" style={{height:"600px"}}>
        <div className="col-md-4 offset-md-1">
            <h2 style={{color:"#3A4256"}}>Appoinmtment</h2>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
          
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid" />
        </div>
    </main>
    );
};

export default AppointementHeader;