import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import UserSideBar from '../../Shared/UserSideBar/UserSideBar';
import SideBar from '../SideBar/SideBar';
import UserAppointments from '../UserAppointments/UserAppointments';

const User = () => {
    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div className='row'>
             <div className="col-md-2">
                    <UserSideBar></UserSideBar>
                </div>
                <div className="col-md-10">
                    <div className='text-center'>
                        <h2>WelCome {loggedInUser.name}</h2>
                    </div>
                    <UserAppointments></UserAppointments>
                </div>
        </div>
    );
};

export default User;