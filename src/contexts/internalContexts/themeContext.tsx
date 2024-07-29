import { type ReactNode, createContext, useContext, useState } from "react";
import { continentId } from "../../components/continentCarousel/ContinentCarousel";

interface ThemeContextProps {
    setTheme: (theme: continentId) => void;
    theme: continentId;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<continentId>("africa");

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<div
				id="theme-provider"
				data-theme={theme}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
