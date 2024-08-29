import Box from '@mui/material/Box';
import Markdown from 'react-markdown';

export type BubbleOptions = {
    content: string,
    bgcolor: string,
    color?: string,
    flushLeft?: boolean
}

export default function Bubble({
    content, color, bgcolor, flushLeft
}: BubbleOptions) {
    return (
        <Box 
            display='flex' 
            justifyContent={flushLeft ? 'flex-start' : 'flex-end'}
            mb={1}
            px={2} // Added horizontal padding for better alignment
        >
            <Box 
                color={color || '#333333'} // Charcoal text color
                bgcolor={bgcolor}
                borderRadius='20px' // Softer border radius
                p={3}
                maxWidth='75%' // Adjusted max width for a more balanced look
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)" // Slightly deeper shadow for depth
                sx={{
                    '&:last-child': {
                        mb: 0
                    }
                }}
            >
                <Markdown>
                    { content }
                </Markdown>
            </Box>
        </Box>
    );
}
