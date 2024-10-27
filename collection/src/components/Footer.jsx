import React from "react";
import { Row } from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer=()=>{
    return(
        <>
        <Row className="mx-3 text-center shadow-eff">
        <h5>Follow me on <InstagramIcon/></h5>
            <h5> © Copyright 2024 .All rights reserved.</h5>
        </Row>
        </>
    )
}