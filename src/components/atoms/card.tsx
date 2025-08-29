import {makeStyles} from "tss-react/mui"
import { theme } from "../../styles/styles"


const useStyles = makeStyles<{direction : "row" | "column"}>()((_, {direction})=>({

    card:{
        border: `${theme.spacing.one}px ${theme.display.solid} ${theme.colors.border}`,
        padding: theme.spacing.lg,
        margin: theme.spacing.md,
        borderRadius: theme.borderRadius.lg,
        backgroundColor: theme.colors.background,
        display: theme.display.flex,
        flexDirection: direction,
        alignItems: theme.display.alignCenter,
        justifyContent:theme.display.justifyContentCenter, 
        textAlign: "center",
    }
}))


type CardProps = {
  direction: "row" | "column";
  children: React.ReactNode;
};


const Card = ({direction, children} : CardProps) => {
    const { classes } = useStyles({ direction });

    return <div className={classes.card}>{children}</div>;
}


export default Card;