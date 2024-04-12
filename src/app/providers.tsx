// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { NextUIProvider } from '@nextui-org/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const breakpoints = {
    sm: '250px',
    md: '850px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
};

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
};

const theme = extendTheme({
    colors: {
        button: {
            900: '#00539C',
            500: ' #00539C',
            100: '#ffa273'
        },
        text: {
            900: '#293241',
            500: '#0D2149',
            400: 'rgba(0, 0, 0, 0.6)',
            200: '#00539C'
        },
        icon: '#00539C',
        link: '#00539C',
        hover: '#20f7d7',
        caption: '#ffa273',
        primary: '#0e2046',
        background: {
            100: '#fff',
            900: '#002341'
        }
    },
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles
                            }
                        },
                        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                            ...activeLabelStyles
                        },
                        label: {
                            position: "absolute",
                            backgroundColor: "white",
                            pointerEvents: "none",
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: "left top"
                        }
                    }
                }
            }
        }
    },
    breakpoints
});




export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    )
}




export function ProvidersNext({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
