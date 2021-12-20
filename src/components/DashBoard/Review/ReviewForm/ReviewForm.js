import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';


const ReviewForm = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = value => {
        alert("Data Added Successfully")
        
        console.log(value);
        const eventData={
            name: value.name,
            email: value.email,
            description: value.description,
            img:loggedInUser.photo,
            designation: value.designation,
            rating: value.rating
        } 
        console.log(eventData);
  
        const url='http://localhost:5000/addReviews'
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
    return (
        <div>
        <div className="container d-flex justify-content-center border bg-light rounded">
       
       <form onSubmit={handleSubmit(onSubmit)}>
       <h4>Name   :</h4>
       <input name="name" type="text" placeholder="Enter Your Name" {...register("name")} value={loggedInUser.name}/>
     
       <h4>Email:</h4>
       <input name="email" type="text" placeholder="Enter Your Email"  {...register("email")} value={loggedInUser.email} />
       <h4>Description:</h4>
       <input name="description" type="text" {...register("description")} placeholder="Write Your Exprences" />
       <br />  
       <h4>Designation:</h4> 
       <input name="designation" type="text" {...register("designation")} placeholder="Write Your Designation" />
       <br />   
       <h4>Rating Out of 100 :</h4> 
       <input name="rating" type="number" {...register("rating")} placeholder="Write Your Rating with us" />
       <br />   
       <input className="btn btn-primary m-3" type="submit"/>
       </form>
   </div>

    </div>
    );
};

export default ReviewForm;