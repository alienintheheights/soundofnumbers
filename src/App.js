import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'

import './css/core.css'
import './css/App.css'

import PlayForm from './Components/PlayForm'

function App() {
    const theme = createTheme({ palette: { mode: 'light' } })
  
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <Container className='home'>
                    <Grid 
                        id='topnav'
                        container 
                        justifyContent="center"
                        alignItems="center"
                        rowSpacing={1} >
                        <Grid item xs={3}>
                            <a href='/'><HomeIcon/></a> 
                        </Grid>
                        <Grid item xs={8}>
                            <h2>  The Sound of Numbers</h2>
                        </Grid>
                        <Grid item xs={1}>
                            <a href='https://github.com/alienintheheights/soundofnumbers'><GitHubIcon/></a>
                        </Grid>
                    </Grid>
                    <div id='play-app'>
                        <PlayForm/>
                    </div>
                    <Grid item xs={12}>
                        <div className='footer'>
                        copyright andrew lienhard 2021
                        </div>
                    </Grid>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App
