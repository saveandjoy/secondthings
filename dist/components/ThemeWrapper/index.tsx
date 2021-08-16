import React, {createContext, useEffect, useState} from "react";
import {DESKTOP, MOBILE} from "../../constants/ThemeWrapper";

interface IThemeProvider {
    theme: ITheme,
    isPwa: boolean;
    isIOS: boolean;
    screenMode: string|null;
    setTheme?: (theme:ITheme) => void;
    viewPortY: number;
}

interface ISizes {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
}

export interface ITheme {
    primaryColor: string;
    primaryColorAccent: string;
    secondaryColor: string;
    secondaryColorAccent: string;
    warningColor: string;
    warningColorAccent: string;
    successColor: string;
    successColorAccent: string;
    neutralColor: string;
    neutralColorAccent: string;
    black: string;
    white: string;
    sizes?: ISizes
}

interface IThemeWrapper {
    breakPoint?: number;
    theme?: ITheme;
    children: any;
}

const DEFAULT_THEME = {
    primaryColor: '#dcfd51',
    primaryColorAccent: '#5e5e5e',
    secondaryColor: '#b5c0f8',
    secondaryColorAccent: '#121212',
    warningColor: '#f8b5b5',
    warningColorAccent: '#121212',
    successColor: '#e1ff93',
    successColorAccent: '#121212',
    neutralColor: '#FFFFFF',
    neutralColorAccent: '#121212',
    white: '#FFFFFF',
    black: '#000000',
    sizes: {
        small: 11,
        medium: 14,
        large: 18,
        extraLarge: 24
    }
}

const DEFAULT_THEME_PROVIDER = {
    theme: DEFAULT_THEME,
    isPwa: false,
    screenMode: null,
    isIOS: false,
    viewPortY: 0
}

export const Theme = createContext<IThemeProvider>(DEFAULT_THEME_PROVIDER);

export default function ThemeWrapper(props:IThemeWrapper) {
    const {breakPoint = 1024, theme, children} = props;
    const [currentTheme, setCurrentTheme] = useState<ITheme>(DEFAULT_THEME);
    const [isPwa, setIsPwa] = useState<boolean>(false);
    const [screenMode, setScreenMode] = useState<string|null>(null);
    const [isIOS, setIsIOS] = useState<boolean>(false);
    const [viewPortY, setViewPortY] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
        if (currentTheme !== theme && theme) {
            setCurrentTheme(theme)
        }
    }, [theme])

    const handleScroll = () => {
        const currentYPosition = Math.floor(window.scrollY);
        setViewPortY(currentYPosition);
    }

    useEffect(() => {
        checkIfOS();
        checkIfPWA();
        handleScreenMode();
        window.addEventListener('resize', () => handleScreenMode())
    }, []);

    const handleScreenMode = () => {
        const windowWidth = window.innerWidth;
        setScreenMode(windowWidth < breakPoint ? MOBILE : DESKTOP);
    }

    const checkIfOS = () => {
        const isIOS = [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
        setIsIOS(isIOS);
    }

    const checkIfPWA = () => {
        // @ts-ignore
        const isPWA = (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator && window.navigator['standalone']) || document.referrer.includes('android-app://');
        setIsPwa(isPWA);
    }

    const handleNewTheme = (newTheme:ITheme) => {
        let copyTheme = Object.assign({}, currentTheme, newTheme);
        setCurrentTheme(copyTheme);
    }

    return (
        <Theme.Provider value={{
            theme: currentTheme,
            isPwa,
            isIOS,
            screenMode,
            viewPortY,
            setTheme: (theme:ITheme) => handleNewTheme(theme)
        }}>
                {children}
        </Theme.Provider>
    )
}