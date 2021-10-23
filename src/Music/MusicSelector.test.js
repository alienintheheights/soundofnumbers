import { render, screen } from '@testing-library/react'
import MusicSelector from './MusicSelector'
import {LYD_NAME} from './musicConstants'

const mockCall = () => {}

test('tests MusicSelector', () => {
    
    const key = 0
    const octave = 4
    const scale = LYD_NAME

    render(<MusicSelector 
        keyIndex={key} 
        selectKey={mockCall} 
        octave={octave} 
        selectOctave={mockCall} 
        scale={scale} 
        selectScale={mockCall}/>)

    expect(screen.getByText(/about/i)).toBeInTheDocument()  
    expect(screen.getByText(/musical/i)).toBeInTheDocument()
    // expect(screen.getByText(/octave/i)).toBeInTheDocument()
})
