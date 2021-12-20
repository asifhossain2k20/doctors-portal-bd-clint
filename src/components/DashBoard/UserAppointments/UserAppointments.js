import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const UserAppointments = () => {
    const[loggedInUser,setLoginUser]=useContext(UserContext);
    
    const [appointments,setAppointments]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                        authorization:`bearer ${sessionStorage.getItem('token')}` },
        })
        .then(res=>res.json())
        .then(data=>{setAppointments(data)})
    },[])
    console.log(appointments)
    return (
         <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Doc Name</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.doctorName}</td>
                        <td>{appointment.service}</td>
                        <td>{appointment.status}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default UserAppointments;