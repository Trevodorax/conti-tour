import { ThemeProvider } from "./internalContexts/themeContext";
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const ContextsWrapper: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}