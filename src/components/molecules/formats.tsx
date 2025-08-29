import React from "react";
import { Card } from "@mui/material";
import { theme } from "../../styles/styles";
import { makeStyles } from "tss-react/mui";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setGrammage, setLength, setWidth } from "../../store/pageSlice";
import { dins, paperSizes } from "../../screens/pageCalculator";


const useStyles = makeStyles()(() => ({
    div:{
        display: theme.display.flex,
        flexDirection: "row",
        alignItems: theme.display.alignCenter,
        justifyContent: theme.display.justifyContentCenter,
    },
  button: {
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.background,
     
    textAlign: "center",
  },
}));



const Formats = () =>{
    const { classes } = useStyles();
    const dispatch = useDispatch<AppDispatch>();
    const {length, width, grammage, numberOfSheets, format, din} = useSelector((state: RootState) => state.page)

    
    return(
        <>
        <div className={classes.div}>
            {
            Object.keys(paperSizes).map((key) => (
            <button
                key={key}
                className={classes.button}
                onClick={() => {
                dispatch(setLength(paperSizes[key as keyof typeof paperSizes].length));
                dispatch(setWidth(paperSizes[key as keyof typeof paperSizes].width));
                }}>
                {key}
            </button>
            ))}       
        </div>
        <div className={classes.div}>

            {
            Object.keys(dins).map((key) => (
            <button
                key={key}
                className={classes.button}
                onClick={() => {
                    dispatch(setGrammage(dins[key as keyof typeof dins]));
                }}>
                {key}
            </button>
            ))} 

        </div>
        
        
        </>
        

    )
}



export default Formats;