import { generateNotes } from './generator'
import * as m from '../Music/musicConstants'

test('tests generator on B Lydian scale', () => {
    let keyIndex = 11
    let scale = m.LYD_NAME
    let octave = 4
    const relativeNotes = generateNotes(keyIndex, m.SCALE_MAP[scale].value, octave)
  
    const bScale =   [
        'B4',  'C#5', 'D#5',
        'F5',  'F#5', 'G#5',
        'A#5', 'B5',  'C#6',
        'D#6', 'F6',  'F#6'
    ]
    expect(relativeNotes).toStrictEqual(bScale)
})


test('tests generator on C chromatic scale', () => {
    let keyIndex = 0
    let scale = m.CHR_NAME
    let octave = 5
    const relativeNotes = generateNotes(keyIndex, m.SCALE_MAP[scale].value, octave)
    const cChroScale =    [
        'C5',  'C#5', 'D5',
        'D#5', 'E5',  'F5',
        'F#5', 'G5',  'G#5',
        'A5',  'A#5', 'B5'
    ]
    expect(relativeNotes).toStrictEqual(cChroScale)
})
