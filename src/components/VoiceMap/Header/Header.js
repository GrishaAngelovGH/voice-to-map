import Box from '@mui/material/Box'
import VoiceSearch from '../VoiceSearch'

const Logo = () => (
    <div className='col-md-4 text-white border rounded bg-primary'>
        <h1 className='m-0'>Voice-To-Map</h1>
        <h3 className='m-0'>Navigate map with your voice</h3>
    </div>
)

const Header = () => (
    <Box
        sx={{
            height: 130,
            backgroundColor: 'primary.light'
        }}
    >
        <div className='row g-0 justify-content-center align-items-center text-center p-3'>
            <Logo />
            <VoiceSearch />
        </div>
    </Box>
)

export default Header