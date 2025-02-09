import React from "react";
import './style/App.scss'
import { Link, Stack, Typography } from "@mui/material"
import { NavBar } from "./components/Navbar";
import { WelcomePage } from "./components/WelcomePage";
import { Gallery } from "./components/Gallery";
import InstagramIcon from '@mui/icons-material/Instagram';
import { LensChronicles } from "./components/LensChronicles";

const App = () => {
  const [value, setValue] = React.useState('Home');
  return (
    <>
      <NavBar value={value} setValue={setValue} />
      {
        value === 'Home' ? <WelcomePage value={value} setValue={setValue} /> : value === "Gallery" ? <Gallery /> : <LensChronicles />
      }

      {value === 'Lens Chronicles' && < Stack direction={'column'} spacing={1} alignItems={'center'} sx={{ backgroundColor: '#000', mt: 2, p: 1 }}>
        <Typography sx={{
          fontFamily: '"Montserrat",serif',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: 400,
          color: '#fff',
          cursor: 'pointer'
        }}>
          <Link href="https://www.instagram.com/its___gopika/" target="_blank" color="inherit" underline="none">Follow me on</Link>
          <InstagramIcon sx={{ fontSize: '15px', verticalAlign: 'middle', mx: 1 }} /></Typography>
        <Typography sx={{
          fontFamily: '"Montserrat",serif',
          fontSize: '14px',
          textTransform: 'none',
          fontWeight: 400,
          color: '#fff',
          letterSpacing: '2px'
        }}>
          © 2025 Gopika. All rights reserved.

        </Typography>

      </Stack >}
    </>
  )



}
export default App;
