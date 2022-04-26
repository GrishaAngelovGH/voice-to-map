import React from 'react'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Slide from '@mui/material/Slide'

import RoomIcon from '@mui/icons-material/Room'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const History = ({ onClose }) => {
    const history = useSelector(state => state.locations.history)

    return (
        <Dialog fullScreen={true} open={true} TransitionComponent={Transition} data-testid="history">
            <AppBar sx={{ position: 'sticky' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        History
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                {
                    history.map((v, i) => (
                        <Fragment key={v.place_id}>
                            <ListItem button>
                                <ListItemText primary={<span>{`#${i + 1}`} <RoomIcon /> {v.display_name}</span>} />
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))
                }
            </List>
        </Dialog>
    )
}

export default History