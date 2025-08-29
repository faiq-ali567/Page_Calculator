import React from "react";
import WeightInfo from "../molecules/weightInfo";
import { theme } from "../../styles/styles";

import { makeStyles } from "tss-react/mui";
import Card from "../atoms/card";

const WeightCard = () => {
    return(

        <>
        
            <Card direction="column">

                <WeightInfo/>

            </Card>
        
        </>


    )

}


export default WeightCard;