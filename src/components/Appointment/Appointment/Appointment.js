import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Navbar from '../../Shared/NavBar/NavBar';
import AppointementHeader from '../AppointmentHeader/AppointementHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const [services,setServices]=useState([]);
    const handleDateChange=date=>{
        setSelectedDate(date);
    }
    useEffect(()=>{
        fetch('http://localhost:5000/servicesByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date:selectedDate})
        })
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[selectedDate])
    console.log(services);
    return (
        <div>
            <NavBar></NavBar>
                        <AppointementHeader handleDateChange={handleDateChange}></AppointementHeader>
           <BookAppointment date={selectedDate} services={services}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;