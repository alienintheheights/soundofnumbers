import React from 'react'
import { Row, Col, Label } from 'reactstrap'

import LoopIcon from '@mui/icons-material/Loop'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'

function StartStop(props)  {

    const {loop, selectLoop, reset, setReset, play, setPlay} = props

    return (
        <React.Fragment>
            <Row id='start-stop'>
                <Col  xs={1} sm={2} md={2} lg={2}>&nbsp;</Col>
                <Col className='triple-col' xs={3} sm={3} md={3} lg={3}>
                    <StopIcon 
                        id="stop-button" 
                        color={play ? 'primary' : 'disabled'}
                        fontSize="large" 
                        onClick={() => {
                            setReset(false)
                            setPlay(false)
                        }}/>
                </Col>   
                <Col className='triple-col' xs={3} sm={3} md={2} lg={2}>
                    <PlayArrowIcon 
                        id="play-button" 
                        color={!play ? 'primary' : 'disabled'}
                        fontSize="large" 
                        onClick={() => {
                            setReset(!reset)
                            setPlay(true)
                        }}/>
                </Col>   
                <Col className='triple-col' xs={3} sm={3} md={3} lg={2}>
                    <LoopIcon 
                        fontSize="large" 
                        onClick={selectLoop} 
                        color={loop ? 'primary' : 'disabled'} />
                </Col>
                <Col xs={2} sm={1} md={1} lg={4}></Col>
            </Row> 
        </React.Fragment>)
}

export default StartStop