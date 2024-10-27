import React from "react";
import '../assets/LoadingPage.css'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

export const LoadingPage= () => {
    return (
        <>
         <div className="loader-div"> 
           <h2 className="loader-text">gopika_</h2>
           <MonochromePhotosIcon sx={{fontSize:'100px'}}/>
           <h2 className="loader-text">_photography</h2>
         </div>
        </>
    )
}