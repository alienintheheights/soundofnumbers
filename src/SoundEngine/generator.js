import { NOTE_SCALE, CHROMATIC_SCALE } from '../Music/musicConstants'

const ZERO_TO_ELEVEN = [...Array(12).keys()]
  
export const generateNotes = (keyIndex=0, scale=CHROMATIC_SCALE, octave=4) => {
    const rootOctave = octave
    let revisedOctave = octave
    return ZERO_TO_ELEVEN.map((row, index) => {
        const arrayIndex = keyIndex + scale[index%12]
        const rawNote = NOTE_SCALE[arrayIndex%12]
        revisedOctave = getOctaveOffset(rootOctave, revisedOctave, rawNote, arrayIndex)
        const finalNote = rawNote + revisedOctave
        return finalNote
    })
}

/**
 * octave, scale, index(0...n)
 * 
 * B4 C5 .. B5 C6
 * 
 * @param {*} rawNote
 * @param {*} index 
 * @returns 
 */
const getOctaveOffset = (rootOctave, revisedOctave, rawNote, arrayIndex) => {
    if (arrayIndex > 0 && rawNote === NOTE_SCALE[0]) {
        return revisedOctave + 1
    } else if (arrayIndex > 11 && rootOctave === revisedOctave) {
        return revisedOctave + 1
    }
    return revisedOctave
}