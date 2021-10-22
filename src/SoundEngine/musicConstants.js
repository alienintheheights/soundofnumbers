
export const TWELVE_NOTE_IONIAN_SCALE = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19]
export const TWELVE_NOTE_DORIAN_SCALE = [0, 2, 3, 5, 7, 9, 10, 12, 14, 15, 17, 18]
export const TWELVE_NOTE_PHYRGIAN_SCALE = [0, 1, 3, 5, 7, 8, 10, 12, 13, 15, 17, 19]
export const TWELVE_NOTE_LYDIAN_SCALE = [0, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19]
export const TWELVE_NOTE_MIXOLYDIAN_SCALE = [0, 2, 4, 5, 7, 9, 10, 12, 14, 16, 17, 19]
export const TWELVE_NOTE_AEOLIAN_SCALE = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19]
export const TWELVE_NOTE_LOCRIAN_SCALE = [0, 1, 3, 5, 6, 8, 10, 12, 13, 15, 17, 19]
export const TWELVE_NOTE_HARMONIC_MINOR_SCALE = [0, 2, 3, 5, 7, 8, 11, 12, 14, 15, 17, 19]
export const TWELVE_NOTE_HUNGARIAN_MINOR_SCALE = [0, 2, 3, 6, 7, 8, 11, 12, 14, 15, 18, 19]
export const TWELVE_NOTE_PHYRGIAN_DOMINANT_SCALE = [0, 1, 4, 5, 7, 8, 10, 12, 13, 16, 17, 19]

export const CHROMATIC_SCALE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const NOTE_SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const ION_NAME = 'ionian'
export const DOR_NAME = 'dorian'
export const PHR_NAME = 'phrygian'
export const LYD_NAME = 'lydian'
export const MIX_NAME = 'mixolydian'
export const AEO_NAME = 'aeolian'
export const LOC_NAME = 'locrian'
export const HAR_NAME = 'harmonic'
export const HUN_NAME = 'hungarian'
export const PDO_NAME = 'phrygiandominant'
export const CHR_NAME = 'chromatic'

export const CUSTOM_LABEL = 'your custom scale'

export const SCALE_MAP = {
    [ION_NAME] : {
        'name'        : 'Ionian',
        'label'       : ION_NAME,
        'value'       : TWELVE_NOTE_IONIAN_SCALE,
        'description' : 'The Ionian scale is W W H W W W H',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [DOR_NAME] : {
        'name'        : 'Dorian',
        'label'       : DOR_NAME,
        'value'       : TWELVE_NOTE_DORIAN_SCALE,
        'description' : 'The Dorian scale is W H W W W H W',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [PHR_NAME] : {
        'name'        : 'Phyrgian',
        'label'       : PHR_NAME,
        'value'       : TWELVE_NOTE_PHYRGIAN_SCALE,
        'description' : 'The Phrygian scale is H W W W H W W',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [LYD_NAME] : {
        'name'        : 'Lydian',
        'label'       : LYD_NAME,
        'value'       : TWELVE_NOTE_LYDIAN_SCALE,
        'description' : 'The Lydian scale is W W W H W W H',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [MIX_NAME] : {
        'name'        : 'Mixolydian',
        'label'       : MIX_NAME,
        'value'       : TWELVE_NOTE_MIXOLYDIAN_SCALE,
        'description' : 'The Mixolydian scale is W W H W W H W',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [AEO_NAME] : {
        'name'        : 'Aeolian',
        'label'       : AEO_NAME,
        'value'       : TWELVE_NOTE_AEOLIAN_SCALE,
        'description' : 'The Aeolian scale is W H W W H W W',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [LOC_NAME] : {
        'name'        : 'Locrian',
        'label'       : 'locrian',
        'value'       : TWELVE_NOTE_LOCRIAN_SCALE,
        'description' : 'The Locrian scale is H W W H W W W',
        'link'        : 'http://musictheoryfundamentals.com/MusicTheory/modes.php'
    },
    [HAR_NAME] : {
        'name'        : 'Harmonic Minor',
        'label'       : HAR_NAME,
        'value'       : TWELVE_NOTE_HARMONIC_MINOR_SCALE,
        'description' : 'The Harmonic scale is an aeolian scale with a major seventh',
        'link'        : 'https://en.wikipedia.org/wiki/Minor_scale#Harmonic_minor_scale'
    },
    [HUN_NAME] : {
        'name'        : 'Hungarian Minor',
        'label'       : HUN_NAME,
        'value'       : TWELVE_NOTE_HUNGARIAN_MINOR_SCALE,
        'description' : 'The Hungarian scale is a lydian harmonic scale',
        'link'        : 'https://en.wikipedia.org/wiki/Hungarian_minor_scale'
    },
    [PDO_NAME] : {
        'name'        : 'Phrygian Dominant',
        'label'       : PDO_NAME,
        'value'       : TWELVE_NOTE_PHYRGIAN_DOMINANT_SCALE,
        'description' : 'The Phrygian Dominant scale is just a harmonic scale starting on the fifth degree',
        'link'        : 'https://en.wikipedia.org/wiki/Phrygian_dominant_scale'
    },
    [CHR_NAME] : {
        'name'        : 'Chromatic',
        'label'       : CHR_NAME,
        'value'       : CHROMATIC_SCALE,
        'description' : 'The Chromatic scale is every note in the twelve note scale, H H H ...',
        'link'        : 'https://en.wikipedia.org/wiki/Chromatic_scale'
    }
}