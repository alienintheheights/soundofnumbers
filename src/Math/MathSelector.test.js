import { render, screen } from '@testing-library/react'
import MathSelector from './MathSelector'
import * as m from './mathConstants'

const mockCall = () => {}

const PI12_NOTES = ['E4','C4','C5','F#4','C5','E5','D5','F#4','D5','E4','G5','D5','C4','C5','A4','A4','F#4','G4','B4','E4','F#5','A4','D4','C4','C4','G5','G5','C4','G4','C4','G4','G4','C4','F#5','E5','G4','B4','D4','D5','D4','D5','E5','F#5','B4','C5','E5','D5','F#5','F#4','D5','D4','B4','F#4','D4','C4','F#4','E5','F#5','A4','E5','F#5','G4','G4','D4','G4','A4','F#5','E5','A4','A4','C4','F#5','E5','E4','B4','G4','E4','F#5','E4','F#5','F#5','G4','F#4','C5','E5','G4','A4','F#4','A4','C5','C5','E5','C4','C5','C4','F#5','E4','A4','C5','E4','E5','C5','E4','D4','B4','D4','G5','G5','G5','F#5','E5','F#5','E4','B4','E5','G5','C4','D4','D4','A4','G4','G4','D4','D5','F#5','C5','D4','C5','D5','E5','E4','G5','F#4','G5','D4','G4','A4','G5','C5','F#4','E5','E4','B4','G4','D5','F#5','B4','C4','A4','D4','A4','G5','C5','F#5','G4','F#4','A4','C5','B4','A4','D4','C4','C5','F#4','D5','G5','C5','F#4','D5','F#5','C5','D4','D4','G4','A4','C4','A4','G5','F#4','F#4','D4','B4','D5','A4','F#5','E4','C4','B4','E4','B4','G5','D4','D4','D5','G5','D4','E4','D5','C4','F#4','C5','D5','C5','G4','E4','D5','F#4','E4','G5','C5','B4','A4','E4','B4','D4','G4','A4','C4','A4','F#4','F#4','B4','D4','E4','A4','G5','E5','D4','B4','F#5','F#4','D4','C4','F#5','F#5','C4','B4','F#5','E4','C5','G5','G4','D4','F#5','C4','C5','F#5','C5','E4','C5','G5','E5','C4','G4','C4','F#4','F#5','G4','C4','C4','F#4','F#4','F#5','D4','E4','E4','C4','G4','F#5','E4','E5','E5','D5','F#5','C5','D5','E5','A4','G5','A4','C4','G5','C5','G5','F#4','C5','F#5','A4','D4','D4','G4','E4','F#5','C5','C5','F#5','G4','E5','F#5','F#4','E4','G5','F#5','E5','D5','F#4','F#4','G4','B4','D4','E4','C4','G4','D5','E4','E4','A4','A4','F#4','F#4','B4','A4','G5','E4','F#5','F#5','G5','G5','B4','B4','G4','C5','E4','D5','B4','G4','C4','D4','E5','A4','C5','E4','G4','D4','A4','G5','B4','G4','G5','F#4','A4','D4','E5','A4','E5','G5','G5','E5','E4','G5','F#4','E4','D4','G4','G4','C4','D5','C4','E4','B4','B4','D4','B4','D4','D5','F#5','D4','C4','F#4','B4','G4','G4']

test('tests MathSelector', () => {
    
    const base = 12
    const constantName = m.PI_NAME
    const noteVals = PI12_NOTES
    const notes = m.PI12

    render(<MathSelector 
        base={base}
        selectBase={mockCall} 
        constantName={constantName} 
        selectNumConstant={mockCall} 
        noteVals={noteVals} 
        notes={notes} />)

    expect(screen.getByText(/base/i)).toBeInTheDocument()  
    expect(screen.getByText(/about/i)).toBeInTheDocument()  
})
