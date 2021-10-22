import React from 'react'
import { Label, Row, Col } from 'reactstrap'

import NativeSelect from '@mui/material/NativeSelect'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

import * as c from '../SoundEngine/mathConstants'

function MathSelector(props) {

    const { selectBase, selectNumConstant, noteVals, notes, constantName, base } = props

    const renderNumberSelect = () => {
        const nameList = Object.keys(c.MATH_MAP)
        return  (
            <Row className='form-row'>
                <Col className='form-col-left' sm={2}>
                    <Label component="legend">number</Label>
                </Col>
                <Col className='form-col-right' sm={10}>
                    <NativeSelect
                        row 
                        aria-label="constantName"
                        value={constantName}
                        autoWidth
                        onChange={selectNumConstant}
                        variant="filled"
                        sx={{
                            paddingLeft  : '10px',
                            boxShadow    : 0.5,
                            borderRadius : 0.5,
                            p            : 1
                        }}
                    >
                        {nameList.map((item, index) => ( <option key={`constant-selection-${index}`} value={item}>{c.MATH_MAP[item].name}</option>))}
                    </NativeSelect>
                </Col> 
            </Row>)
    }

    const renderBaseSelect = () => {
        return  (
            <Row className='form-row'>
                <Col className='form-col-left' sm={2}>
                    <Label component="legend">base</Label>
                </Col>
                <Col className='form-col-right' sm={10}>
                    <FormControlLabel control={ <Radio />} onClick={() => { 
                        selectBase(10)
                    }} checked={base===10} name="base" label='10' />
                    <FormControlLabel control={ <Radio />} onClick={() => { 
                        selectBase(12)
                    }} checked={base===12} name="base" label='12' />
                </Col> 
            </Row>)
    }

    const renderMathAbout = () => {
        const entry = c.MATH_MAP[constantName]
        const subsetofDigits = notes.substring(0,30)
        return (
            <Row>
                <Col className='form-col-left' sm={2}>
                    about
                </Col>
                <Col id='math-about' className='form-col-right' sm={10}>
                    {entry && ( 
                        <div>
                            <Row>
                                <Col id='math-label'> 
                                    {entry.label}<sub>{base}</sub> = {subsetofDigits}...
                                </Col>
                            </Row>
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

    return (
        <Row id='playback'>
            <Col className='section-label' sm={12}>
            presets
            </Col>
            {renderNumberSelect()}
            {renderBaseSelect()}
            {renderMathAbout()}
        </Row>)
}

export default MathSelector