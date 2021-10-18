

import Container from '@mui/material/Container'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import './App.css'
import PlayForm from './Tones/PlayForm'

function App() {
    const theme = createTheme({ palette: { mode: 'light' } })
    
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <h2>The Sound of Numbers</h2>
                <Box sx={{ flexGrow: 1 }}>
                    <PlayForm/>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default App
