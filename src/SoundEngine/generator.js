import { NOTE_SCALE, CHROMATIC_SCALE } from '../Music/musicConstants'

const ZERO_TO_ELEVEN = [...Array(12).keys()]
  
/**
 * Map scale, key and octave into specific note sequence. Assumes 9 = 9th and 0 = 10th.
 * 
 * @param {number} keyIndex 
 * @param {array} scale 
 * @param {number} octave 
 * @returns new scale array
 */
export const generateNotes = (keyIndex=0, scale=CHROMATIC_SCALE, octave=4) => {
    let revisedOctave = octave
    let lastMod = 0
    return ZERO_TO_ELEVEN.map((row, index) => {
        // shift scale to new key
        const arrayIndex = keyIndex + scale[index%12]
        // look for octave jumps
        const mod = arrayIndex%12
        if (lastMod > mod) {
            revisedOctave++
        }
        lastMod = mod
        return  NOTE_SCALE[arrayIndex%12] + revisedOctave
    })
}
