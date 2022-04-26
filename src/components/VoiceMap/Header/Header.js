import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import recognition from "../recognition"
import { addLocation } from '../../../slices/locationSlice'

const Header = () => {
    const [isRecoding, setIsRecording] = useState(false)
    const [detectedInput, setDetectedInput] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        if (!isRecoding) {
            recognition.start()
            setIsRecording(true)
        }
    }

    useEffect(() => {
        recognition.onresult = event => {
            const input = event.results[0][0].transcript

            setDetectedInput(input)
            dispatch(addLocation(input))
        }

        recognition.onerror = ({ error }) => {
            if (error === 'no-speech') {
                setDetectedInput('No detected speech')
                toast.error('No detected speech', { theme: 'colored' })
            }
            recognition.stop()
            setIsRecording(false)
        }

        recognition.onspeechend = () => {
            recognition.stop()
            setIsRecording(false)
        }
    }, [dispatch])

    return (
        <Box
            sx={{
                height: 150,
                backgroundColor: 'primary.light'
            }}
            className="row g-0 justify-content-center align-items-center text-center p-3"
            data-testid="header"
        >
            <div className="col-md-5 text-white border rounded bg-primary">
                <h1>Voice-To-Map</h1>
                <h3>Navigate map with your voice</h3>
            </div>
            <div className="col-md-3">
                <Fab variant="extended" color={!isRecoding ? "inherit" : "warning"} onClick={handleClick}>
                    {!isRecoding ? "Record Voice" : "Recording..."}
                </Fab>
            </div>
            <div className="col-md-4 bg-light p-3 rounded">
                <TextField label="Detected Input" variant="outlined" color='info' value={detectedInput} disabled fullWidth={true} />
            </div>
        </Box>
    )
}

export default Header