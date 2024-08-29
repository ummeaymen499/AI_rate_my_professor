'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useRef, useEffect } from 'react';

export type ChatWindowOptions = {
    width: string | number,
    height: string | number,
    children?: JSX.Element | JSX.Element[]
}

export default function ChatWindow({
    width, height, children
}: ChatWindowOptions) {
    const ref = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        if (ref.current !== null) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [children, ref])

    return (
        <Box 
            width={width} 
            height={height} 
            overflow='auto'
            borderRadius={12}
            border="1px solid #b0bec5" // Light blue-gray border for a professional touch
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
            p={3}
            bgcolor="#f5f5f5" // Light background color with a hint of blue
            sx={{
                position: 'relative',
                '&::-webkit-scrollbar': {
                    width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#cfd8dc', // Light blue-gray track
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#90caf9', // Light blue thumb
                    borderRadius: '12px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#64b5f6', // Blue on hover
                },
            }}
        >
            <Stack direction='column' spacing={2} minHeight='100%'>
                {children}
                <span ref={ref}></span>
            </Stack>
        </Box>
    );
}
