import React from 'react';
import corona from '../../images/corona.jpg'
import ebola from  '../../images/ebola.jpg'
import hiv from '../../images/hiv.jpg'
import NavBar from '../Shared/NavBar/NavBar';
import Blogg from './Blogg/Blogg';


const blogData=[
    {
        name:'corona',
        description:'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.',
        img:corona

   },
    {
        name:'EBOLA',
        description:'Ebola is a virus that causes problems with how your blood clots. It is known as a hemorrhagic fever virus, because the clotting problems lead to internal bleeding, as blood leaks from small blood vessels in your body.s',
        img: ebola

    },   {
        name:'HIV',
        description:'HIV (human immunodeficiency virus) is a virus that attacks the bodys immune system. If HIV is not treated, it can lead to AIDS (acquired immunodeficiency syndrome). Learning the basics about HIV can keep you healthy and prevent HIV transmission.',
        img: hiv

    }
   
]

const Blogs = () => {
    return (
        <div className="container">
           <NavBar></NavBar>
            <div className="row mt-5">
                {
                    blogData.map(blog=><Blogg  blog={blog}></Blogg>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;