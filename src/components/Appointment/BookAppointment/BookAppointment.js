import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData=[
    {
        id:1,
        subject:'Teeth Orthodontics',
        visitHour:'8:00 AM - 9:00 AM',
        totalSpace:10

    },    {
        id:2,
        subject:'Cosmetic Dentistry',
        visitHour:'10:00 AM - 11:00 AM',
        totalSpace:10

    },    {
        id:3,
        subject:'Teeth Cleaning',
        visitHour:'7:00 AM - 9:00 AM',
        totalSpace:10

    },    {
        id:4,
        subject:'Cavity Protection',
        visitHour:'8:00 AM - 9:00 AM',
        totalSpace:10

    },    {
        id:5,
        subject:'Teeth Orthodontics',
        visitHour:'8:00 AM - 9:00 AM',
        totalSpace:10

    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitHour:'8:00 AM - 9:00 AM',
        totalSpace:10

    }

]

const BookAppointment = ({date,services}) => {
    return (
        <section>
            
            <h2 className="text-center">Available Appointment on {date.toDateString()}</h2>
            <div className="row m-5">
            {
                services.map(booking=><BookingCard date={date} key={booking.id} booking={booking}></BookingCard>)
            }    
            </div>       
        </section>
    );
};

export default BookAppointment;