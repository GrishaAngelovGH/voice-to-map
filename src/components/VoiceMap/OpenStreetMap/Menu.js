import { useState } from 'react'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Drawer from '@mui/material/Drawer'

import HistoryIcon from '@mui/icons-material/History'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'

const Menu = () => {
    const [showHistory, setShowHistory] = useState(false)
    const [showWorkflow, setShowWorkflow] = useState(false)

    const handleChange = (event, index) => {
        index === 0 ? setShowHistory(true) : setShowWorkflow(true)
    }

    const handleClose = () => {
        setShowHistory(false)
        setShowWorkflow(false)
    }

    return (
        <div className="row g-0">
            <div className="col-md-12">
                <BottomNavigation showLabels={true} onChange={handleChange}>
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Workflow" icon={<DesktopWindowsIcon />} />
                </BottomNavigation>

                <Drawer open={showHistory || showWorkflow} anchor={'top'} onClose={handleClose}>
                    {showHistory && <div>HISTORY</div>}
                    {showWorkflow && <div>WORKFLOW</div>}
                </Drawer>
            </div>
        </div>
    )
}

export default Menu