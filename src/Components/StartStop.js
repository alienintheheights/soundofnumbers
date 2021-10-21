import React from 'react'
import { Row, Col, Label } from 'reactstrap'

import LoopIcon from '@mui/icons-material/Loop'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'


function StartStop(props)  {

    const {summary, loop, selectLoop, reset, setReset, play, setPlay} = props

    const playText = play ? 'Playing' : 'Hear'
    return (
        <React.Fragment>
            <Row id='playback'>
                <Col className='section-label' sm={12}>
                player
                </Col>
            </Row>
            <Row>
                <Col id='settings-summary' className='form-col-right-extra' sm={12}>
                    <span id=''>{playText} {summary}</span>
                </Col>
            </Row>
            <Row>
                <Col id='start-stop' className='form-col-right-mobile' sm={12} md={12}>
                    {play &&  <StopIcon 
                        id="stop-button" 
                        color='primary'
                        fontSize="large" 
                        onClick={() => {
                            setReset(false)
                            setPlay(false)
                        }}/>}
                    {!play && <PlayArrowIcon 
                        id="play-button" 
                        color='primary'
                        fontSize="large" 
                        onClick={() => {
                            setReset(!reset)
                            setPlay(true)
                        }}/>}
                    <LoopIcon 
                        fontSize="large" 
                        onClick={selectLoop} 
                        color={loop ? 'primary' : 'disabled'} />
                  
                </Col>
            </Row> 
          
        </React.Fragment>)
}

export default StartStop