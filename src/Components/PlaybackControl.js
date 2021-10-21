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

    const {loop, reset, setReset, play, setPlay, tempo, selectTempo, noteVals} = props

    const renderPlayer = () => {
        return (
            <Play play={play} noteVals={noteVals} tempo={tempo} loop={loop} reset={reset} endPlay={() => {
                setReset(false)
                setPlay(false)
            }}/>
        )
    }

    return (
        <React.Fragment>
            <Row>
                <Col  className='form-col-left' xl={2} sm={2}>
                   visualizer
                </Col>
                <Col className='form-col-right' id='player-row' xl={10} sm={10}>
                    {renderPlayer()}
                </Col>
            </Row>
            <Row>
                <Col className='form-col-left' sm={2}>
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