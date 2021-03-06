
import React, { useState, useEffect } from "react";
import { axiosAuth } from "../utils/axiosAuth";
import {Link} from "react-router-dom";


import CampaignCard from "./CampaignCard";
import CampaignsList from "./CampaignsList";


const ProfilePage = () => {
    const [user, setUser] = useState([]);
   
    useEffect(() => {
        axiosAuth()
        .get("users")
        .then( res => {
            console.log(res)
        setUser(res.data)})
        .catch( err => console.log(err))
    
      }, [])

   return(
       <div>
           <CampaignsList />
           <Link to ="/form"><button>Add Campaign</button></Link>
       </div>
   )
}

export default ProfilePage;

