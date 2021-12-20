import React from 'react';
import { faPhone,faClock,faMapMarker } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const infoData=[
        {
            title:'Openning Hours',
            description:'We are open 24/7',
            icon:faClock,
            background:'primary'
        },{
            title:'Visit Our Location',
            description:'Dhap,Rangpur',
            icon:faMapMarker,
            background:'dark'
        },{
            title:'Call Us Now',
            description:'+8801719207069',
            icon:faPhone,
            background:'primary'
        }
    ]

    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>
            
        </section>
    );
};

export default BusinessInfo;