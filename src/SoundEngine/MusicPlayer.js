import React, { useEffect, useRef } from 'react'

import * as Tone from 'tone'
import { NOTE_SCALE } from './musicConstants'

const colorList = [
    '#a2def2',
    '#79a6b5',
    '#7fd3f0',
    '#4d97b0',
    '#33c1f2',
    '#0f3542',
    '#034787',
    '#057beb',
    '#409094',
    '#0cbec7',
    '#323f40',
    '#0a4e52',
    '#0a6953'
]
//background-color:#adc4cc;
//  background-color: #1976d2;
// #daeaf0

function Play(props) {

    const noteRefs = []
    for (let i = 0; i < 12 ; i++) {
        noteRefs[NOTE_SCALE[i]] = useRef(null)
    }
    const { noteVals, tempo, loop, play, reset, endPlay } = props

    const decay = 0.05
    const volume = 1
    const waveform =  'fatsine' 

    const reverb = new Tone.Reverb({
        decay    : 1.5,
        preDelay : 0.5,
        wet      : 0.75
    }).toDestination()
    
    const comp = new Tone.Compressor(-30, 3)

    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator : {
            volume   : volume,
            type     : waveform,
            partials : [0, 2, 3, 4]
        }
    }).connect(reverb).connect(comp).toDestination()

    useEffect(() => {
        if (play || reset) {
            restartSequence()
        } else {
            stopSequence()
        }
    }, [play, noteVals, tempo, loop, reset])

   
    const stopSequence = () => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
    }

    const restartSequence = () => {
        stopSequence()
        let index = 0
        
        Tone.Transport.bpm.value = tempo
        const seq = new Tone.Sequence((time, note) => {
            index++
            if (note === '') return // "." mapping
            synth.triggerAttackRelease(note, decay, time + 0.20)
            Tone.Draw.schedule(() => {
                const currentNoteName = note.substring(0, note.length - 1)
                const noteElement = noteRefs[currentNoteName].current
                noteElement.classList.add('active')
               
                //var color = Math.floor(Math.random()*16777215).toString(16) // = "#A197B9"
                // noteElement.style.backgroundColor=color //colorList[index%12]
                setTimeout(() => {
                    noteElement.classList.remove('active')
                }, 100)
            })
            if (!loop && index === noteVals.length) {
                endPlay()
                Tone.Transport.cancel()
            }
        }, noteVals).start('+0.2')
        seq.loop = loop
        Tone.Transport.start()
    }

    return (
        <div id="note-wrapper">
            <div ref={noteRefs['C']} id="C" className="current-note">C</div>
            <div ref={noteRefs['C#']} id="CS" className="current-note">C#</div>
            <div ref={noteRefs['D']} id="D" className="current-note">D</div>
            <div ref={noteRefs['D#']} id="DS" className="current-note">D#</div>
            <div ref={noteRefs['E']} id="E" className="current-note">E</div>
            <div ref={noteRefs['F']} id="F" className="current-note">F</div>
            <div ref={noteRefs['F#']} id="FS" className="current-note">F#</div>
            <div ref={noteRefs['G']} id="G" className="current-note">G</div>
            <div ref={noteRefs['G#']} id="GS" className="current-note">G#</div>
            <div ref={noteRefs['A']} id="A" className="current-note">A</div>
            <div ref={noteRefs['A#']} id="AS" className="current-note">A#</div>
            <div ref={noteRefs['B']} id="B" className="current-note">B</div>
        </div>

    )
}

export default Play
