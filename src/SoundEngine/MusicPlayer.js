import React, { useEffect } from 'react'

import * as Tone from 'tone'

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

    const { noteVals, tempo, loop, play, reset, endPlay } = props

    const decay = 0.05
    const volume = 1
    const waveform =  'fatsine' 
  
    const reverb = new Tone.Reverb({
        decay    : 1.5,
        preDelay : 0.5,
        wet      : 0.75
    }).toDestination()

    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator : {
            volume   : volume,
            type     : waveform,
            partials : [0, 2, 3, 4]
        }
    }).connect(reverb).toDestination()

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
        Tone.Transport.bpm.value = tempo
        let index = 0
        const seq = new Tone.Sequence((time, note) => {
            index++
            if (note === '') return // "." mapping
            synth.triggerAttackRelease(note, decay, time)
            Tone.Draw.schedule(() => {
                const currentNote = note.substring(0, note.length - 1).replace('#', 'S')
                const noteElement = document.querySelector('#'+currentNote)
                noteElement.classList.add('active')
                var color = Math.floor(Math.random()*16777215).toString(16) // = "#A197B9"

                noteElement.style.backgroundColor=color //colorList[index%12]
                setTimeout(() => {
                    noteElement.classList.remove('active')
                }, 50)
            })
            if (!loop && index === noteVals.length) {
                endPlay()
            }
        }, noteVals).start(0)
        seq.loop = loop
        Tone.Transport.start()
    }

    return (
        <div id="note-wrapper">
            <div id="C" className="current-note">C</div>
            <div id="CS" className="current-note">C#</div>
            <div id="D" className="current-note">D</div>
            <div id="DS" className="current-note">D#</div>
            <div id="E" className="current-note">E</div>
            <div id="F" className="current-note">F</div>
            <div id="FS" className="current-note">F#</div>
            <div id="G" className="current-note">G</div>
            <div id="GS" className="current-note">G#</div>
            <div id="A" className="current-note">A</div>
            <div id="AS" className="current-note">A#</div>
            <div id="B" className="current-note">B</div>
        </div>

    )
}

export default Play
