import React from 'react'
import { Row, Col } from 'reactstrap'

import Slider from '@mui/material/Slider'

import Play from '../SoundEngine/MusicPlayer'

const marks = [
    {
        value : 40,
        label : '40',
    },
    {
        value : 80,
        label : '80',
    },
    {
        value : 120,
        label : '120',
    },
    {
        value : 160,
        label : '160',
    },
    {
        value : 200,
        label : '200',
    }
]
function PlaybackControl(props) {

    const {loop, reset, setReset, play, setPlay, tempo, selectTempo, noteVals, summary} = props

    const playText = 'The sound of a '
    return (
        <React.Fragment>
            <Row id='playback'>
                <Col className='section-label' sm={12}>
                player
                </Col>
            </Row>

            <Row>
                <Col  xs={3} sm={2} md={2} lg={2}></Col>
                <Col id='settings-summary' xs={9} sm={10} md={10} lg={10}>
                    <span id=''>{playText} {summary}</span>
                </Col>
            </Row>
            <Row>
                <Col className='subsection-label form-col-left' xl={2} sm={2}>
                   visualizer
                </Col>
                <Col className='form-col-right' id='player-row' xl={10} sm={10}>
                    <Play play={play} 
                        noteVals={noteVals} 
                        tempo={tempo} 
                        loop={loop} 
                        reset={reset} 
                        endPlay={() => {
                            setReset(false)
                            setPlay(false)
                        }}/>
                </Col>
            </Row>
            <Row>
                <Col className='subsection-label form-col-left' sm={2}>
                    b.p.m.
                </Col>
                <Col id='tempo-slider' className='form-col-right' sm={10}>
                    <Slider
                        aria-label="Tempo"
                        value={tempo}
                        valueLabelDisplay="auto"
                        onChange={selectTempo}
                        marks={marks}
                        step={5}
                        min={40}
                        max={200}
                    />
                </Col>
            </Row>
        </React.Fragment>)
}

export default PlaybackControl