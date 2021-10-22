import React, { useEffect, useRef } from 'react'

import * as Tone from 'tone'
import { NOTE_SCALE } from '../Music/musicConstants'

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
            {NOTE_SCALE.map((item) => (<div ref={noteRefs[item]} className="current-note">{item}</div>  ))}
        </div>

    )
}

export default Play
