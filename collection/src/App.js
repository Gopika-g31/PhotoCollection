
import { LoaderPage } from "./components/LoaderPage";
import './assets/LoaderPage.css'
import { HomePage } from "./components/HomePage";
import { useEffect, useState } from "react";


function App() {
   const [showLoadingPage, setShowLoadingPage] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setShowLoadingPage(false);
      }, 3500)
    })


  return (
    <>
   {
     showLoadingPage ? <LoaderPage/> :<HomePage/>
   }
    </>
  );
}

export default App;
