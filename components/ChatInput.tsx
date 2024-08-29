'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

export type ChatInputOptions = {
    onSubmit: ((msg: string) => void) | ((msg: string) => Promise<void>)
    debounce?: boolean
}

export default function ChatInput({
    onSubmit, debounce
}: ChatInputOptions) {
    const [message, setMessage] = useState<string>('');

    async function handleSubmit() {
        if (message.trim()) {
            setMessage('');
            await onSubmit(message);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <Stack direction={'row'} spacing={2} alignItems='center'>
            <TextField 
                label="Type your message..." 
                fullWidth 
                variant="outlined"
                size="small"
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={handleKeyDown}
                sx={{
                    borderRadius: '25px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '25px',
                        backgroundColor: '#ffffff', // Light background for the input
                        '& fieldset': {
                            borderColor: '#cccccc', // Light gray border
                        },
                        '&:hover fieldset': {
                            borderColor: '#009688', // Teal border on hover
                            borderWidth: 2,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#009688', // Teal border when focused
                            borderWidth: 2,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#666', // Darker gray label
                        transition: 'color 0.3s',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#009688', // Teal label when focused
                    },
                    '& .MuiInputBase-input': {
                        color: '#333', // Dark text color
                        transition: 'color 0.3s',
                    },
                    '&:hover .MuiInputBase-input': {
                        color: '#000', // Darker text color on hover
                    },
                    '&:focus-within .MuiInputBase-input': {
                        color: '#000', // Darker text color when focused
                    },
                }}
            />
            <Button 
                variant="contained" 
                onClick={handleSubmit} 
                disabled={debounce || !message.trim()}
                sx={{
                    borderRadius: '25px',
                    bgcolor: '#009688', // Teal background for the button
                    color: '#fff',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                        bgcolor: '#00796b', // Darker teal on hover
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s, bgcolor 0.3s',
                    },
                    '&:disabled': {
                        bgcolor: '#c2c2c2', // Light gray background for disabled state
                        color: '#888',
                    },
                }}
            >
                Send
            </Button>
        </Stack>
    );
}
