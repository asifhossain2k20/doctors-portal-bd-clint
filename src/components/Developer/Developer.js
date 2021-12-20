import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import img from './Images/a.png'

const Developer = () => {
    return (
        <div>
            <div className="container bg-light">
                <NavBar></NavBar>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <section className="p-5">

                           <h1>HELLO I'M </h1>
                           <h1> Asif Hossain Alif</h1>
                            <br />
                            <br />
                            <h5>A Full Stack Web Application Developer with 2 years plus experience in modern technologies like React JS, Node(Rest API), Express, MongoDB, React-Bootstrap, Material-UI, Firebase and Bootstrap5. I'm here to convert your business idea into a web-based system. I build fast, high-quality, eye-catching websites with the latest technology from scratch, rebuilding the pre-existing website, and fix bugs. So let's connect.</h5>            


                        </section>
                    </div>
                    <div className="col-md 6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Developer;