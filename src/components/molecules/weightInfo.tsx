import React from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setNumberOfSheets } from "../../store/pageSlice";





const WeightInfo = ()=>{

    
    const dispatch = useDispatch<AppDispatch>();
    const {length, width, grammage, numberOfSheets, format, din} = useSelector((state: RootState) => state.page)

    return(
        <div>
            <p><strong>Page size format:</strong> {format}</p>
            <p><strong>Page weight format:</strong> {din}</p>

            <p><strong>Weight:</strong> {length * width * grammage * numberOfSheets} g</p>

            <TextField
                style={{margin:10}}
                type="number"
                label="Number of sheets"
                value={numberOfSheets}
                onChange={(val)=>{dispatch(setNumberOfSheets(Number(val.target.value)))}}
            />
        </div>
    )
}



export default WeightInfo;