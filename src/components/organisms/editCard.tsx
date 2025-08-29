import React from "react";
import Edit from "../molecules/edit"
import Card from "../atoms/card";
import { theme } from "../../styles/styles";

import { makeStyles } from "tss-react/mui";



const EditCard = () => {
    return(
      <Card direction="column">
            <Edit/>
        </Card>
    )
}


export default EditCard;