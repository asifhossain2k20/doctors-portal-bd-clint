import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Service </th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                  services.map((s, index) => 
                    <tr>      
                        <td>{index + 1}</td>
                        <td>{s.service}</td>
                        <td>{s.time}</td>
                        <td>{s.date}</td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllServices;