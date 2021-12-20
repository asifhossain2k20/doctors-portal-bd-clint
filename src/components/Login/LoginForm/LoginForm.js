import React from 'react';
import './LoginForm.css'

const LoginForm = () => {
    return (
  <div className="container mt-5 mb-5 d-flex justify-content-center">
    <div className="card px-1 py-4">
        <div className="card-body">
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small className="agree-text">By Booking this appointment you agree to the</small> <a href="#" className="terms">Terms Conditions</a> </div> <button className="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
    </div>
    );
};

export default LoginForm;