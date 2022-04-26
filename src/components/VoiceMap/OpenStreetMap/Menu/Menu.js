import { useState } from 'react'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Drawer from '@mui/material/Drawer'

import ListIcon from '@mui/icons-material/List'
import HistoryIcon from '@mui/icons-material/History'

import History from './History'
import Suggestions from './Suggestions'

const Menu = ({ disableHistory }) => {
    const [showHistory, setShowHistory] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleChange = (event, index) => {
        index === 0 ? !disableHistory && setShowHistory(true) : setShowSuggestions(true)
    }

    const handleClose = () => {
        setShowHistory(false)
        setShowSuggestions(false)
    }

    return (
        <div className="row g-0" data-testid="menu">
            <div className="col-md-12">
                <BottomNavigation showLabels={true} onChange={handleChange}>
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Suggestions" icon={<ListIcon />} />
                </BottomNavigation>

                <Drawer open={showHistory || showSuggestions} anchor={'top'} onClose={handleClose}>
                    {showHistory && <History onClose={handleClose} />}
                    {showSuggestions && <Suggestions onClose={handleClose} />}
                </Drawer>
            </div>
        </div>
    )
}

export default Menu