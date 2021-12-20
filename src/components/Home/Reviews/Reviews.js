import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/reviewss')
        .then(res=>res.json())
        .then(data=>{
            setReviewsData(data)
        })
    },[])
    return (
        <section className="doctors">
            <div className="container mt-5">
                <h5 className="text-center  text-primary mb-5">REVIEWS</h5>
                <div className="row mt-4">
                
                {
                    reviewsData.map(r =><Review review={r}></Review>)
                }
            </div>
            </div>
        </section>
    );
};

export default Reviews;