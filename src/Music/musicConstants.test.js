import * as m from './musicConstants'

test('tests musicConstants', () => {
    expect(m.SCALE_MAP[m.ION_NAME].name).toBe('Ionian')
    expect(m.SCALE_MAP[m.ION_NAME].value).toBe(m.TWELVE_NOTE_IONIAN_SCALE)
})
