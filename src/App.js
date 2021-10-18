


import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'

import './App.css'
import PlayForm from './Tones/PlayForm'

function App() {
    const theme = createTheme({ palette: { mode: 'light' } })
  
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <Grid 
                    container 
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={2} 
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2}>
                        <a href='/'><HomeIcon/></a> 
                    </Grid>
                    <Grid item xs={8}>
                        <h2>  The Sound of Numbers</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <a href='https://github.com/alienintheheights/soundofnumbers'><GitHubIcon/></a>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ flexGrow: 1 }}>
                            <PlayForm/>
                        </Box>
                        <div className='footer'>
                        copyright andrew lienhard 2021
                        </div>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default App
