import { useState } from 'react'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'

const Header = () => {
    const [isRecoding, setIsRecording] = useState(false)

    return (
        <Box
            sx={{
                height: 150,
                backgroundColor: 'primary.dark'
            }}
            className="row g-0 justify-content-center align-items-center p-3"
            data-testid="header"
        >
            <div className="col-md-7 text-white">
                <h1>Voice-To-Map</h1>
                <h3>Navigate map with your voice</h3>
            </div>
            <div className="col-md-5">
                <Fab variant="extended" color={!isRecoding ? "inherit" : "warning"}>
                    {!isRecoding ? "Record" : "Recording..."}
                </Fab>
            </div>
        </Box>
    )
}

export default Header