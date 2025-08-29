import React from "react";

import Card from "../atoms/card";
import { theme } from "../../styles/styles";

import { makeStyles } from "tss-react/mui";
import Formats from "../molecules/formats";


const FormatCard = () =>{
    return(
        <Card direction="column">
            <Formats/>
        </Card>
    )
}


export default FormatCard