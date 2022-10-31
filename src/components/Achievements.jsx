import React from "react";
import Fundamentls from "./365-fundamentals.png";
import Team from "./365-teams.png";
import AzureAd from "./azure-administrator.png";
import AzureFund from "./azure-fundamentals.png";


const Achievements = ()=>
{
    const certifications=[
        {
            id:1,
            src: Fundamentls,
            title: "Microsoft 365 Fundamentals"
        },
        {
            id:2,
            src: Team,
            title: "Microsoft 365 Teams"
        },
        {
            id:3,
            src: AzureAd,
            title: "Microsoft Azure Administrator"
        },
        {
            id:4,
            src: AzureFund,
            title: "Microsoft Azure Fundamentals"
        
        },
    ]
    return(
        <div name="certifications" className="bg-gradient-to-b from-gray-800 to-black w-full:h-screen">
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

               <p className="text-4xl font-bold inline border-b-4 boarder-gray-500 p-2">Certifications</p> 
               <p className="py-6">My Additional Certifications</p>
            </div>
            
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center ps-8 px-12 sm:px-0">

 {
     certifications.map(({id,src,title})=>
     (
        <div key={id} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={src} alt=""className="w-20 mx-auto"/>
            <p className="mt-4 text-white">{title}</p>
        </div>
  
     )

     )
 }
         </div>     
        </div>
        </div>
    )
};

export default Achievements;