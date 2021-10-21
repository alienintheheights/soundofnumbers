import React, { useState, useEffect } from 'react'

import MathSelector from './MathSelector'
import MusicSelector from './MusicSelector'
import PlaybackControl from './PlaybackControl'
import CustomEntry from './CustomEntry'
import StartStop from './StartStop'

import { generateNotes } from '../SoundEngine/generator'
import * as c from '../SoundEngine/mathConstants'
import * as m from '../SoundEngine/musicConstants'

const base12pattern = /[^0-9AB]/gi

function PlayForm() {

    const [play, setPlay] = useState(false)
    const [notes, setNotes] = useState(c.PI12)
    const [noteVals, setNoteVals] = useState([])
    const [base, setBase] = useState(12)
    const [constantName, setConstantName] = useState(c.PI_NAME)
    const [scale, setScale] = useState(m.LYD_NAME)
    const [tempo, setTempo] = useState(130)
    const [loop, setLoop] = useState(false)
    const [key, setKey] = useState(0)
    const [octave, setOctave] = useState(4)
    const [reset, setReset] = useState(false)

    useEffect(() => {
        prepareNotes()
    }, [scale, constantName, key, octave, notes, base])

    const getConstantName = () => {
        const val = c.MATH_MAP[constantName]
        return (val) ? c.MATH_MAP[constantName].name : m.CUSTOM_LABEL
    }

    const getConstantLabel = () => {
        const val = c.MATH_MAP[constantName]
        return (val) ? c.MATH_MAP[constantName].label : ''
    }

    const selectNoteValues = (event) => {
        const value = event.target.value
        if (isValidNumber(value)) {
            setNotes(value)
            setConstantName(m.CUSTOM_LABEL)
        }
    }

    const prepareNotes = () => {
        if (play) {
            setReset(false)
            setPlay(false)
        }
        const prundedVal = notes.replace('.', '')
        const splitNotes = [...prundedVal]
        const relativeNotes = generateNotes(key, m.SCALE_MAP[scale].value, octave)
        const noteArray = splitNotes.filter(num => isValidNumber(num)).map(num => findNote(num, relativeNotes))
        setNoteVals(noteArray)
    }

    const isValidNumber = (num) => {
        const prundedVal = num.replace('.', '')
        if (base === 10) 
            return !isNaN(prundedVal)

        return (typeof (prundedVal) === 'string' && !prundedVal.match(base12pattern)) 
    }

    const findNote = (num, relativeNotes) => {
        let index // could do this with the ASCII values instead
        switch (num) {
            case '0':
                index = 9
                break
            case 'A':
            case 'a':
                index = 10
                break
            case 'B':
            case 'b':
                index = 11
                break
            default:
                index = num -1
        }
        return relativeNotes[index]
    }

    const selectBase = (val) => {
        setBase(val)
        const mapping = c.MATH_MAP[constantName]
        if (mapping) {
            setNotes((val == 10) ? mapping.value : mapping.value12)
        }
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
        setKey(1 * event.target.value)
    }

    const selectOctave = (event) => {
        const val = event.target.value * 1
        if (isNaN(val) || val < 0) {
            return
        }
        setOctave(val)
    }

    const selectNumConstant = (event) => {
        const val = (event) ? event.target.value : constantName
        const mapping = c.MATH_MAP[val]
        if (mapping) {
            setConstantName(val)
            setNotes((base == 10) ? mapping.value : mapping.value12)
        }
    }

    const scaleName = m.SCALE_MAP[scale].name
    const baseInfo = (base === 12) ? 'base 12' : ''
    const summary =  `${getConstantName()}, ${getConstantLabel()}, ${baseInfo} in ${scaleName} mode `

    return (
        <div id='play-form-wrapper'>
            <StartStop
                loop={loop}
                selectLoop={selectLoop}
                reset={reset}
                setReset={setReset}
                play={play}
                setPlay={setPlay}
                summary={summary} />
            <PlaybackControl 
                loop={loop}
                selectLoop={selectLoop}
                reset={reset}
                setReset={setReset}
                play={play}
                setPlay={setPlay}
                tempo={tempo}
                selectTempo={selectTempo}
                noteVals={noteVals}
            />
            <MathSelector 
                base={base}
                selectBase={selectBase} 
                constantName={constantName} 
                selectNumConstant={selectNumConstant} 
                noteVals={noteVals} 
                notes={notes} />
            <MusicSelector 
                keyIndex={key} 
                selectKey={selectKey} 
                octave={octave} 
                selectOctave={selectOctave} 
                scale={scale} 
                selectScale={selectScale}/>
            <CustomEntry
                notes={notes}
                selectNoteValues={selectNoteValues}
            />
        </div>
    )
}

export default PlayForm
