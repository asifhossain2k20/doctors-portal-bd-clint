import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
const AppointmentForm = ({date,modalIsOpen,closeModal,appointmentOn,doctorName}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.date=date;
        data.service=appointmentOn;
        data.doctorName=doctorName;
        data.status="pending";
        data.create=new Date();
        fetch('http://localhost:5000/addAppointment',{
          method: 'POST',
          headers:{'content-type': 'application/json'},
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=>{
          if(success){
            alert("Your Appointment Done")
            closeModal();
          }
        })
    }
 
    return (
        <div>  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center">{appointmentOn}</h2>
        <h3 className="text-secondary text-center">On {date.toDateString()}</h3>
        <button onClick={closeModal}>close</button>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
                 <input {...register("name")} name="name" placeholder="Enter Your Name : " className="form-control" />
                 {errors.name && <span className="text-danger">This field is required</span>}
        </div>
        <div className="form-group">
                 <input {...register("email")} name="email" placeholder="Enter Your Email : " className="form-control" />
                 {errors.name && <span className="text-danger">This field is required</span>}
        </div>
        <div className="form-group">
                 <input {...register("phoneNo")} name="phoneNo" placeholder="Enter Your Phone Number : " className="form-control" />
                 {errors.name && <span className="text-danger">This field is required</span>}
        </div>

        <div className="form-group row" >
            <div className="col-md-4">
                <select name="gender" id="" {...register("gender")} className="form-control">
                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                </select>
                {errors.gender && <span className="text-danger">This field is required</span>}
            </div>
            <div className="col-4">
                            <input {...register("age")} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
             </div>

             <div className="col-4">
                            <input {...register("weight")} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>

             </div>

                <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Send</button>
                </div>
        </form>
      </Modal>
            
        </div>
    );
};

export default AppointmentForm;