import React from "react";
import WeightInfo from "../molecules/weightInfo";
import { useLocalStorage } from "@uidotdev/usehooks";
import WeightCard from "../organisms/weightCard";
import EditCard from "../organisms/editCard";
import Formats from "../molecules/formats";
import FormatCard from "../organisms/formatCard";





const PageWeightCalulator = () => {



    return (


        <>
        
            <h1>Page Calculator</h1>

            <WeightCard />
            <EditCard/>
            <FormatCard/>
        </>
    )
}


export default PageWeightCalulator