import React from 'react'
import { Label, Row, Col } from 'reactstrap'
import NativeSelect from '@mui/material/NativeSelect'

import * as m from '../SoundEngine/musicConstants'
function MusicSelector(props) {

    const {scale, selectScale, keyIndex, selectKey, octave, selectOctave} = props

    const renderModeAbout = () => {
        const entry = m.SCALE_MAP[scale]
        return (
            <Row>
                <Col className='form-col-left' sm={2}>
                    about
                </Col>
                <Col id='math-about' className='form-col-right' sm={10}>
                    {entry && ( 
                        <div>
                            <Row> 
                                <Col id='math-description'>
                                    {entry.description} <a target="_new" href={entry.link}>more</a>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Col>
            </Row>
        )
    }

    const nameList = Object.keys(m.SCALE_MAP)
    return (
        <Row>
            <Col className='section-label' sm={12}>
                musical
            </Col>
            <Row className='form-row'>
                <Col className='form-col-left' sm={2}>
                    <Label component="legend">mode</Label>
                </Col>
                <Col className='form-col-right' sm={10}>
                    <NativeSelect
                        row 
                        aria-label="scale"
                        value={scale}
                        label="Mode"
                        autoWidth
                        onChange={selectScale}
                        sx={{
                            paddingLeft  : '10px',
                            boxShadow    : 0.5,
                            borderRadius : 0.5,
                            p            : 1
                        }}
                    >
                        {nameList.map((item, index) => ( <option key={`constant-selection-${index}`} value={item}>{m.SCALE_MAP[item].name}</option>))}
           
                    </NativeSelect>
                </Col> 
            </Row>
            <Row className='form-row'>
                <Col className='form-col-left' sm={2}>
                    <Label component="legend">key</Label>
                </Col> 
                <Col className='form-col-right' sm={10}>
                    <NativeSelect
                        row 
                        aria-label="key"
                        value={keyIndex}
                        label="Key"
                        autoWidth
                        onChange={selectKey}
                        sx={{
                            paddingLeft  : '10px',
                            boxShadow    : 0.5,
                            borderRadius : 0.5,
                            p            : 1
                        }}
                    >
                        <option value={0}>C</option>
                        <option value={1}>C#</option>
                        <option value={2}>D</option>
                        <option value={3}>D#</option>
                        <option value={4}>E</option>
                        <option value={5}>F</option>
                        <option value={6}>F#</option>
                        <option value={7}>G</option>
                        <option value={8}>G#</option>
                        <option value={9}>A</option>
                        <option value={10}>A#</option>
                        <option value={11}>B</option>
                    </NativeSelect>
                </Col>
            </Row>
            <Row className='form-row'>
                <Col className='form-col-left' sm={2}>
                    <Label component="legend">octave</Label>
                </Col> 
                <Col className='form-col-right' sm={10}>
                    <NativeSelect
                        row 
                        aria-label="octave"
                        value={octave}
                        label="Octave"
                        autoWidth
                        onChange={selectOctave}
                        sx={{
                            paddingLeft  : '10px',
                            boxShadow    : 0.5,
                            borderRadius : 0.5,
                            p            : 1
                        }}
                    >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                    </NativeSelect>
                </Col>
            </Row>
            {renderModeAbout()}
        </Row>)
}


export default MusicSelector   