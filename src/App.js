import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'

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
                    <div id='about-app'>
                        <p>Have you ever wondered what a number might sound like? No? Curious?  
                       Select a number from the presets section, or just type one in below in the custom section. 
                       Next, select a musical mode, scale and key. Then hit play. You can adjust the tempo too. For an even
                       geekier experience, toggle the base of the number between 10 and 12. The latter provides more range on the pitches generated.
                        </p>
                        <p>
                        Phone users, make sure your speaker is on (turn off silent mode). And if you hear any audio glitches, refresh the page. Still working on getting that sorted out.
                        You can learn more about this app in the following <a href='https://www.andrewlienhard.io/irrational-composition/'>article</a>.
                        </p>
                    </div>
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
