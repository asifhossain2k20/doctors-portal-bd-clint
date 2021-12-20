import React from 'react';
import { useHistory } from 'react-router-dom';
import chair from '../../../../images/chair.png'

const HeaderMain = () => {
    const history=useHistory();
    const handleClick=()=>{
        history.push('/appointment');
    }
    return (
        <main className="row d-flex align-items-center" style={{height:"600px"}}>
            <div className="col-md-4 offset-md-1">
                <h2 style={{color:"#3A4256"}}>Your Smile <br/>Starts from Here</h2>
                <p className="text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor pariatur architecto beatae repudiandae commodi.
                </p>
                <button onClick={handleClick} className="btn btn-primary">APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;