import { useState, useEffect } from 'react'

import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import recognition from "../recognition"

const Header = () => {
    const [isRecoding, setIsRecording] = useState(false)
    const [detectedInput, setDetectedInput] = useState('')

    const handleClick = () => {
        recognition.start()
        setIsRecording(true)
    }

    useEffect(() => {
        recognition.onresult = function (event) {
            const input = event.results[0][0].transcript

            setDetectedInput(input)
        }

        recognition.onerror = function ({ error }) {
            if (error === 'no-speech') {
                setDetectedInput('No detected speech')
            }
            recognition.stop()
            setIsRecording(false)
        }

        recognition.onspeechend = function () {
            recognition.stop()
            setIsRecording(false)
        }
    }, [isRecoding])

    return (
        <Box
            sx={{
                height: 150,
                backgroundColor: 'primary.light'
            }}
            className="row g-0 justify-content-center align-items-center p-3"
            data-testid="header"
        >
            <div className="col-md-4 text-white">
                <h1>Voice-To-Map</h1>
                <h3>Navigate map with your voice</h3>
            </div>
            <div className="col-md-2">
                <Fab variant="extended" color={!isRecoding ? "inherit" : "warning"} onClick={handleClick}>
                    {!isRecoding ? "Record" : "Recording..."}
                </Fab>
            </div>
            <div className="col-md-4 bg-light p-3 rounded">
                <TextField label="Detected Input" variant="outlined" color='info' value={detectedInput} disabled fullWidth={true} />
            </div>
        </Box>
    )
}

export default Header