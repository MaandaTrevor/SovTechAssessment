import React from "react";
import MyProfile from "./profile.jpg";


const Home =()=>
{
    return (
     <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
       <div className ="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
           <div className="flex flex-col justify-center h-full">
               <h2 className ="text-4xl sm:text-7xl font-bold text-white">Software Developer Graduate</h2>
               <p className ="text-gray-500 py-4 max-w-md">
                   My name is Mamafha Maanda Trevor I'm 26 years old.
                   I'm an IT graduate major in Software development.
                   I'm seeking for a graduate programme to kick off my career as Software Developer.
               </p>
               
           </div>
           <div> 
               <img src={MyProfile} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
           </div>
       </div>
         </div>

    );
};

export default Home;
