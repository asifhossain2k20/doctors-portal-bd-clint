import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({review}) => {
    return (
     <div className="col-md-4 text-center border border-5">
        <h4>{review.name}</h4>
        <p> <b>Service : </b>{review.description}</p>
        <h5>{review.rating}% Out of 100%</h5>
    </div>
    );
};

export default Review;