import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import 'react-calendar/dist/Calendar.css';
import SideBar from '../../SideBar/SideBar';
import AllServices from '../AllServices/AllServices';
const containerStyle={
    backgroundColor:'#F4FDFB',
    height:'100%'
}

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectedDate,setSelectedDate]=useState();
    const handleDateChange=date=>{
        setSelectedDate(date);
    }
    const onSubmit = data => {
        data.date=selectedDate;
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(success=>{
            if(success){
              alert("Your Sevice Done")
            }
          })
    };
    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-5 p-5">
            <Calendar
            onChange={handleDateChange}
            value={new Date()}
             />

             <section>
             <form onSubmit={handleSubmit(onSubmit)}>
             <br/>
                <input className="mt-2" placeholder="Service Name"  {...register("service")} /><br/>
                <input className="mt-2" placeholder="Doctors Name"  {...register("doctor")} /><br/>
                <input className="mt-2" placeholder="Time" {...register("time", { required: true })} />
                <br/>
                <input className="mt-2" type="submit" />
                </form>
             </section>

            </div>
            <div className="col-md-5">
                <AllServices></AllServices>
            </div>
        </div>
    </section>
    );
};

export default AddService;