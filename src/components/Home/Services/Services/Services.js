import React, { useEffect, useState } from 'react';
import fluoride from '../../../../images/flouride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitenning.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Services = () => {

    const serviceData=[
        {
            name:'Floride Treatment',
            img:fluoride
        }, {
            name:'Cavity Filling',
            img:cavity
        }, {
            name:'Teeth Whitening',
            img:whitening
        }
    ]
 

    return (
        <section className="service-container mt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>Our Services</h5>
                <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                {
                    serviceData.map(service=><ServiceDetails service={service}></ServiceDetails>)
                }
                </div> 
            </div>
        </section>
    );
};

export default Services;