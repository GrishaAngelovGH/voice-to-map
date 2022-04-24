import { useState } from 'react'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Drawer from '@mui/material/Drawer'

import ListIcon from '@mui/icons-material/List'
import HistoryIcon from '@mui/icons-material/History'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'

import History from './History'

const Menu = ({ disableHistory }) => {
    const [showHistory, setShowHistory] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [showWorkflow, setShowWorkflow] = useState(false)

    const handleChange = (event, index) => {
        if (index === 0) {
            !disableHistory && setShowHistory(true)
            return
        }

        index === 1 ? setShowSuggestions(true) : setShowWorkflow(true)
    }

    const handleClose = () => {
        setShowHistory(false)
        setShowSuggestions(false)
        setShowWorkflow(false)
    }

    return (
        <div className="row g-0">
            <div className="col-md-12">
                <BottomNavigation showLabels={true} onChange={handleChange}>
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Suggestions" icon={<ListIcon />} />
                    <BottomNavigationAction label="Workflow" icon={<DesktopWindowsIcon />} />
                </BottomNavigation>

                <Drawer open={showHistory || showWorkflow || showSuggestions} anchor={'top'} onClose={handleClose}>
                    {showHistory && <History onClose={handleClose} />}
                    {showSuggestions && <div>SUGGESTIONS</div>}
                    {showWorkflow && <div>WORKFLOW</div>}
                </Drawer>
            </div>
        </div>
    )
}

export default Menu