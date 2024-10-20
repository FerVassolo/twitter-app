import styles from "./button.module.scss";
import { MouseEventHandler } from "react";
import Typography from "../commons/typography/typography";

// Since the height is the same for all button sizes, and since in the design system sizes it varies a lot,
// I'll not give them a particular size (sm, md, lg).
// They will always fit to the container they're in.
type ButtonProps = {
    children: React.ReactNode;
    // ToDo: Not all variants are yet implemented
    variant?: "main" | "dark" | "light" | "black" | "error" | "outlined";
    color?: string; // You can manually change it.
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function Button(
    {children,
        variant = "main",
        color = "",
        className = "",
        onClick}: ButtonProps){

    return(
        <button
            onClick={onClick}
            className={`
                ${styles.button} 
                ${styles[variant]} 
                ${className}
            `}
            style={{ backgroundColor: color }}
        >
            <Typography fontWeight={"800"} fontSize={"15px"}>{children}</Typography>
        </button>
    )
}
