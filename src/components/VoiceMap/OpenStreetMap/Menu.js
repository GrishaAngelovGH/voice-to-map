import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HistoryIcon from '@mui/icons-material/History'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'

const Menu = () => {
    const handleChange = (event, index) => {

    }

    return (
        <div className="row g-0">
            <div className="col-md-12">
                <BottomNavigation showLabels={true} onChange={handleChange}>
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Workflow" icon={<DesktopWindowsIcon />} />
                </BottomNavigation>
            </div>
        </div>
    )
}

export default Menu