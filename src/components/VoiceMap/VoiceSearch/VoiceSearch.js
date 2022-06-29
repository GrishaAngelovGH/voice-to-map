import { useState, useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Fab from '@mui/material/Fab'
import TextField from '@mui/material/TextField'

import recognition from "../recognition"
import { addLocation } from '../../../slices/locationSlice'

const VoiceSearch = () => {
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
        <Fragment>
            <div className="col-md-3">
                <Fab className="mt-1 mb-1" variant="extended" color={!isRecoding ? "inherit" : "warning"} onClick={handleClick}>
                    {!isRecoding ? "Record Voice" : "Recording..."}
                </Fab>
            </div>
            <div className="col-md-4 bg-light p-3 rounded">
                <TextField label="Detected Input" variant="outlined" color='info' value={detectedInput} disabled fullWidth={true} />
            </div>
        </Fragment>
    )
}

export default VoiceSearch