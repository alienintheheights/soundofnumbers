import React from 'react'
import { Row, Col } from 'reactstrap'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function CustomEntry(props) {

    const { notes, selectNoteValues, noteVals} = props

    return (
        <Row id='data-card'>
            <Row >
                <Col className='section-label' sm={12}>
                custom
                </Col>
                <Col>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root' : { m: 1, pt: 2, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                        variant="filled"
                    >
                        <TextField
                            multiline 
                            maxRows={10}
                            value={notes}
                            onChange={selectNoteValues}
                            label={'Enter a custom numerical sequence'} 
                        />
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col className='section-label' sm={12}>
                note rendering
                </Col>
                <Col>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root' : { m: 1, pt: 2, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                        variant="filled"
                    >
                        <TextField
                            disabled={true}
                            multiline 
                            maxRows={10}
                            value={noteVals}
                            label={'Enter a custom numerical sequence'} 
                        />
                    </Box>
                </Col>
            </Row>
        </Row>)
}

export default CustomEntry