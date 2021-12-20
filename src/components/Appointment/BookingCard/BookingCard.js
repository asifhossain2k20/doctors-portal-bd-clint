import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 ">
           <div className="card p-3 shadow">
               <div className="card-body text-center">
                   <h4>Dr {booking.doctor}</h4>
                   <h5>{booking.service}</h5>
                   <h6>{booking.time}</h6>
                   <button onClick={openModal} style={{backgroundColor:'#1CC7C1' ,color:"white",fontSize:"bold"}} className="btn btn-brand text-uppercase">
                       Book Appointment
                   </button>
                   <AppointmentForm doctorName={booking.doctor} appointmentOn={booking.service} modalIsOpen={modalIsOpen} closeModal={closeModal}
                   date={date}></AppointmentForm>
                  
               </div>
               
           </div>
           
       </div>
    );
};

export default BookingCard;