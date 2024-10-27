import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { LoadingPage } from "./components/LoadingPage";

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
        showLoadingPage ? <LoadingPage /> : <>
          <HomePage />
        </>

      }

    </>
  );
}

export default App;
