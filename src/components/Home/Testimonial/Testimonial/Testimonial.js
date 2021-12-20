import React from 'react';

const Testimonial = ( {details,name,from ,img}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{details}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;