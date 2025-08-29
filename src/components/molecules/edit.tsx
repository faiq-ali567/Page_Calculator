import React, { useState } from "react";
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setGrammage, setLength, setWidth } from "../../store/pageSlice";




const Edit = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const {length, width, grammage, numberOfSheets, format} = useSelector((state: RootState) => state.page)

    return (
        <>
            <p>Length: {length}mm</p>
            <Slider
            value={length}
            onChange={(_, newValue) => dispatch(setLength(newValue as number))}
            min={1}
            max={500}
            step={5}
            />

            <p>Width: {width}mm</p>
            <Slider
            value={width}
            onChange={(_, newValue) => dispatch(setWidth(newValue as number))}
            min={1}
            max={500}
            step={5}
            />

            <p>Grammage: {grammage}g</p>
            <Slider
            value={grammage}
            onChange={(_, newValue) => dispatch(setGrammage(newValue as number))}
            min={10}
            max={1000}
            step={5}
            />
        </>
    );
}




export default Edit;