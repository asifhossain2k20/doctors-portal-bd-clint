import SideBar from '../SideBar/SideBar';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl,setImgUrl]=useState(null);

    console.log(imgUrl)
    const onSubmit = data => {
        console.log(data);
        const eventData={
            name: data.name,
            phone: data.phone,
            imgURL: imgUrl
        } 
        console.log(eventData);
  
        const url='http://localhost:5000/addDoctor'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('This is Response ',res);
            alert("Data Added Successfully")
        })
  
    }


    const handleImgUpload=event => {
        console.log(event.target.files[0]);
        const imgData=new FormData();
        imgData.set('key','3056d284efcf0e25af106ff8b6a972f1')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
          setImgUrl(response.data.data.url);
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }
    return (
        <div>
             <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <h1>ADD services List</h1>

                <div className="container d-flex justify-content-center border bg-light rounded">
           
           <form onSubmit={handleSubmit(onSubmit)}>
           <h4>Doctor Name   :</h4>
           <input name="name" type="text" placeholder="Enter Docotor Name" {...register("name")} />
         
           <h4>Service Description :</h4>
           <input name="description" cols="20" rows="10" type="text" placeholder="Enter Phone No"  {...register("phone")} />
        
           
           <h4>Upload Service Image :</h4>
           <input  type="file" onChange={handleImgUpload}/>
           <br />
           
           <input className="btn btn-primary m-3"type="submit" />
           </form>
       </div>


                
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;