'use client'

import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";

export function Provide ({children}:{children:ReactNode}){
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}