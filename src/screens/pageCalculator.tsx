import React, { useEffect } from "react";
import PageWeightCalulator from "/Users/faiqali/Documents/page_weight/src/components/templates/pageWeightCalulator";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/index";
import { setFormat, setGrammage, setDins } from "../store/pageSlice";
import Edit from "../components/molecules/edit";
import EditCard from "../components/organisms/editCard";



export const paperSizes = {
  "A2": { length: 100, width: 150 },
  "A3": { length: 200, width: 250 },
  "A4": { length: 300, width: 350 },
  "A5": { length: 400, width: 450 },
  "A6": { length: 500, width: 450 },
  "DL": { length: 500, width: 350 }
};

export const dins = {
  "DIN A": 80,
  "DIN B": 100,
  "DIN C": 90,
  "JIS B": 80,
  "US Formats": 75
};

const PageCalculator = () =>{
    const dispatch = useDispatch<AppDispatch>();
    const {length, width, grammage, numberOfSheets, format, din} = useSelector((state: RootState) => state.page)
    useEffect(()=> {
        let ok = 0;
        for (const key in paperSizes) {
            if (
                length === paperSizes[key as keyof typeof paperSizes].length &&
                width === paperSizes[key as keyof typeof paperSizes].width
            ) {
                ok++;
                dispatch(setFormat(key))
            }
        }
        if(ok == 0){
            dispatch(setFormat("›Custom Format"))
        }
    },[length, width])

    useEffect(()=>{
        let ok = 0;
        for (const key in dins) {
            if (
                grammage === dins[key as keyof typeof dins]
            ) {
                ok++;
                dispatch(setDins(key))
            }
        }
        if(ok == 0){
            dispatch(setDins("Custom Grammage"))
        }
    },[grammage, din])

    return(
        <>
           <PageWeightCalulator/>
            
        </>
    )
}


export default PageCalculator;