import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import SideBar from '../../SideBar/SideBar';
import AdminAllData from '../AdminAllData/AdminAllData';

const Admin = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                       <h1 className="text-center text-primary">Welcome {loggedInUser.name}</h1>
                       <AdminAllData></AdminAllData>
                </div>
            </div>
        </div>
    );
};

export default Admin;