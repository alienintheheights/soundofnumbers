import React, { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'

import Play from './Play'
import { generateNotes } from './generator'
import * as c from '../constants'

// octave marks
const marks = c.NOTE_SCALE.map((note, index) => {
    return {
        value : index,
        label : note
    }
})

const base12pattern = /[^0-9AB]/g

function PlayForm() {

    const [play, setPlay] = useState(false)
    const [notes, setNotes] = useState('1234567890')
    const [noteVals, setNoteVals] = useState([])
    const [constantName, setConstantName] = useState('')
    const [scale, setScale] = useState('ionian')
    const [tempo, setTempo] = useState(120)
    const [loop, setLoop] = useState(false)
    const [key, setKey] = useState(0)
    const [octave, setOctave] = useState(4)
    const [base, setBase] = useState(10)

    useEffect(() => {
        prepareNotes()
    }, [scale, constantName, key, octave, notes])

    const selectNoteValues = (event) => {
        const value = event.target.value
        if (isValidNumber(value)) {
            setNotes(value)
            setConstantName('custom')
        }
    }

    const prepareNotes = () => {
        const splitNotes = [...notes]
        const relativeNotes = generateNotes(key, c.SCALE_MAP[scale], octave)
        const noteArray = splitNotes.filter(num => isValidNumber(num)).map(num => findNote(num, relativeNotes))
        setNoteVals(noteArray)
    }

    const isValidNumber = (num) => {
        if (base === 10) 
            return !isNaN(num)

        return (typeof (num) === 'string' && !num.match(base12pattern)) 
    }

    const findNote = (num, relativeNotes) => {
        let index // could do this with the ASCII values instead
        switch (num) {
            case '0':
                index = 9
                break
            case 'A':
                index = 10
                break
            case 'B':
                index = 11
                break
            default:
                index = num -1
        }
        return relativeNotes[index]
    }

    const selectLoop = () => {
        setLoop(!loop)
    }

    const selectTempo = (event) => {
        setTempo(event.target.value)
    }

    const selectScale = (event) => {
        setScale(event.target.value)
    }

    const selectKey = (event) => {
        setKey(event.target.value)
    }

    const selectBase = () => {
        if (base === 10) {
            setBase(12)
        } else if (base === 12) {
            setBase(10)
        }
    }

    const selectOctave = (event) => {
        const val = event.target.value * 1
        if (isNaN(val) || val < 0) {
            return
        }
        setOctave(val)
    }

    const selectNumConstant = (event) => {
        const val = event.target.value
        setConstantName(val)
        setBase((val === c.PI12_NAME)? 12 : 10) 
        setNotes(c.MATH_MAP[val].value || '')
    }

    return (
        <div className='tone-form'>
            <Grid 
                container 
                justifyContent="center"
                alignItems="center"
                rowSpacing={2} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Play play={play} noteVals={noteVals} tempo={tempo} loop={loop} showNote={false}/>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button 
                            id="play-button" 
                            onClick={() => setPlay(true)}
                            label='Play It'>Play</Button>
                        <Button 
                            id="stop-button" 
                            onClick={() => setPlay(false)}
                            label='Stop It'>Stop</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={10}>
                    <FormLabel component="legend">Tempo</FormLabel>
                    <Slider
                        aria-label="Tempo"
                        defaultValue={120}
                        valueLabelDisplay="auto"
                        onChange={selectTempo}
                        step={5}
                        marks
                        min={40}
                        max={180}
                    />
                    <Button id="tempo-button" >{tempo}</Button>
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel control={ <Radio  />} value="loop" onClick={selectLoop} checked={loop} name="loop" label='Loop' />
                </Grid>
                <Grid item xs={10}>
                    <FormLabel component="legend">Root Note</FormLabel>
                    <Slider
                        aria-label="Key"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        onChange={selectKey}
                        step={1}
                        marks={marks}
                        min={0}
                        max={11}
                    />
                </Grid>
                <Grid item xs={2}  id='octave-wrapper'>
                    <FormLabel component="legend">Octave</FormLabel>
                    <TextField
                        id='octave-field'
                        size='small'
                        type='number' 
                        onChange={selectOctave}
                        value={octave}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Mode</FormLabel>
                        <RadioGroup row aria-label="scale" name="row-radio-buttons-group">
                            <FormControlLabel control={ <Radio  />} value="ionian" onClick={selectScale} checked={scale==='ionian'} name="scale" label='Ionian' />
                            <FormControlLabel control={ <Radio  />} value="dorian" onClick={selectScale} checked={scale==='dorian'} name="scale" label='Dorian' />
                            <FormControlLabel control={ <Radio  />} value="phrygian" onClick={selectScale} checked={scale==='phrygian'} name="scale" label='Phrygian' />
                            <FormControlLabel control={ <Radio  />} value="lydian" onClick={selectScale} checked={scale==='lydian'} name="scale" label='Lydian' />
                            <FormControlLabel control={ <Radio  />} value="mixolydian" onClick={selectScale} checked={scale==='mixolydian'} name="scale" label='Mixolydian' />
                            <FormControlLabel control={ <Radio  />} value="aeolian" onClick={selectScale} checked={scale==='aeolian'} name="scale" label='Aeolian' />
                            <FormControlLabel control={ <Radio  />} value="locrian" onClick={selectScale} checked={scale==='locrian'} name="scale" label='Locrian' />
                            <FormControlLabel control={ <Radio  />} value="harmonic" onClick={selectScale} checked={scale==='harmonic'} name="scale" label='Harmonic Minor' />
                            <FormControlLabel control={ <Radio  />} value="hungarian" onClick={selectScale} checked={scale==='hungarian'} name="scale" label='Hungarian Minor' />
                            <FormControlLabel control={ <Radio  />} value="phrygiandominant" onClick={selectScale} checked={scale==='phrygiandominant'} name="scale" label='Phrygian Dominant' />
                            <FormControlLabel control={ <Radio  />} value="chromatic" onClick={selectScale} checked={scale==='chromatic'} name="scale" label='Chromatic' />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Mathematical Constants</FormLabel>
                        <RadioGroup row aria-label="numConstant" name="row-radio-buttons-group">
                            <FormControlLabel control={ <Radio  />} value="pi" onClick={selectNumConstant} checked={constantName===c.PI_NAME} name="numConstant" label={c.MATH_MAP[c.PI_NAME].label} />
                            <FormControlLabel control={ <Radio  />} value="pi12" onClick={selectNumConstant} checked={constantName===c.PI12_NAME} name="numConstant" label={c.MATH_MAP[c.PI12_NAME].label} />
                            <FormControlLabel control={ <Radio  />} value="e" onClick={selectNumConstant}  checked={constantName===c.E_NAME} name="numConstant" label={c.MATH_MAP[c.E_NAME].label} />
                            <FormControlLabel control={ <Radio  />} value="gamma" onClick={selectNumConstant} checked={constantName===c.GAMMA_NAME} name="numConstant" label={c.MATH_MAP[c.GAMMA_NAME].label} />
                            <FormControlLabel control={ <Radio  />} value="phi" onClick={selectNumConstant} checked={constantName==='phi'} name="numConstant" label={c.MATH_MAP['phi'].label} />
                            <FormControlLabel control={ <Radio  />} value="root2" onClick={selectNumConstant} checked={constantName===c.ROOT2_NAME} name="numConstant" label={c.MATH_MAP[c.ROOT2_NAME].label} />
                            <FormControlLabel control={ <Radio  />} value="root5" onClick={selectNumConstant} checked={constantName===c.ROOT5_NAME} name="numConstant" label={c.MATH_MAP[c.ROOT5_NAME].label} />
                        </RadioGroup>
                        <div className='about-constant'>
                            {constantName && c.MATH_MAP[constantName] && (<a href={c.MATH_MAP[constantName].link}>{c.MATH_MAP[constantName].description}</a>)}
                        </div>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root' : { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            multiline 
                            maxRows={10}
                            onChange={selectNoteValues}
                            value={notes}
                            label={'Or enter a custom note sequence'} //optional
                        />
                    </Box>
                    <div>
                        <FormControlLabel control={ <Radio />} onClick={() => { 
                            setNotes('')
                            setBase(10)
                        }} checked={base===10} name="base" label='Base 10' />
                        <FormControlLabel control={ <Radio />} onClick={() => { 
                            setNotes('')
                            setBase(12)
                        }} checked={base===12} name="base" label='Base 12' />
                    </div> 
                   
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root' : { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            multiline 
                            maxRows={10}
                            disabled={true}
                            value={noteVals}
                            label={'translated to notes per the selected root and mode'}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlayForm
