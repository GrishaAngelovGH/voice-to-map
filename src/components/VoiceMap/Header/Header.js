import Box from '@mui/material/Box'
import VoiceSearch from '../VoiceSearch'

const Logo = () => (
    <div className="col-md-5 text-white border rounded bg-primary">
        <h1>Voice-To-Map</h1>
        <h3>Navigate map with your voice</h3>
    </div>
)

const Header = () => (
    <Box
        sx={{
            height: 150,
            backgroundColor: 'primary.light'
        }}
        className="row g-0 justify-content-center align-items-center text-center p-3"
        data-testid="header"
    >
        <Logo />
        <VoiceSearch />
    </Box>
)

export default Header