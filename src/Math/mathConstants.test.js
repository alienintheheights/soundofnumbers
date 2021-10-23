import { render, screen } from '@testing-library/react'
import * as m from './mathConstants'

test('tests mathConstants', () => {
    
    expect(m.MATH_MAP[m.PI_NAME].name).toBe('Pi')
    expect(m.MATH_MAP[m.PI_NAME].value).toBe(m.PI)


    expect(m.MATH_MAP[m.E_NAME].name).toBe('Euler\'s Number')
    expect(m.MATH_MAP[m.E_NAME].value).toBe(m.E)
})
