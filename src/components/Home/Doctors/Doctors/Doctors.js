import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>{
            setDoctorsData(data)
        })
    },[])
    return (
        <section className="doctors">
            <div className="container mt-5">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row mt-4">
                
                {
                    doctorsData.map(doctor =><Doctor doctor={doctor}></Doctor>)
                }
            </div>
            </div>
        </section>
    );
};

export default Doctors;