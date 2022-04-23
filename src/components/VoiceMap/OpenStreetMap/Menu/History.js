import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import RoomIcon from '@mui/icons-material/Room'

const History = () => {
    const history = useSelector(state => state.locations.history)

    return (
        <div className="row g-0" style={{ height: 300 }}>
            <div className="col-md-12">
                <Box sx={{ bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {
                                history.map(v => (
                                    <ListItem key={v.place_id} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <RoomIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={v.display_name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </nav>
                </Box>
            </div>
        </div >
    )
}

export default History