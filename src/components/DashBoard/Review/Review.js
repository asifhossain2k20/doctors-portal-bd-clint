import React from 'react';
import UserSideBar from '../../Shared/UserSideBar/UserSideBar';
import ReviewForm from './ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-9">
                    <h1>Review Here</h1>
                    <ReviewForm></ReviewForm>
                </div>
            </div>
        </div>
    );
};

export default Review;
