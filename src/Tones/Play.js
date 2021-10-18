import React, { useEffect } from 'react'

import * as Tone from 'tone'

function Play(props) {

    const { noteVals, tempo, loop, play, showNote } = props

    const decay = 0.1
    const volume = 1
    const waveform =  'fatsine' 
  
    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator : {
            volume   : volume,
            type     : waveform,
            partials : [0, 2, 3, 4]
        }
    }).toDestination()

    useEffect(() => {
        if (play) {
            restartSequence()
        } else {
            stopSequence()
        }
    }, [play, noteVals, tempo, loop])
   
    const stopSequence = () => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
    }

    const restartSequence = () => {
        stopSequence()
        Tone.Transport.bpm.value = tempo
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, decay, time)
            Tone.Draw.schedule(() => {
                const currentNote = note.substring(0, note.length - 1).replace('#', 'S')
                const noteElement = document.querySelector('#'+currentNote)
                noteElement.classList.add('active')
                setTimeout(() => {
                    noteElement.classList.remove('active')
                }, 50)
            })
        }, noteVals).start(0)
        seq.loop = loop
        Tone.Transport.start()
    }

    return (
        <div>
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

        </div>

    )
}

export default Play
