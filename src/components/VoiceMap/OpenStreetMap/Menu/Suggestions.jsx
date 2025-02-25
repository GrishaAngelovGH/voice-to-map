import React from 'react'
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

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const suggestions = [
	'Bulgaria Sofia National Palace of Culture',
	'Bulgaria Sofia Zoo',
	'Bulgaria Sofia National History Museum',
	'London Palace of Westminster',
	'London Buckingham Palace',
	'London Piccadilly Circus',
	'London Big Ben',
	'Tower Bridge London',
	'Germany Brandenburg Gate',
	'France Eiffel Tower'
]

const Suggestions = ({ onClose }) => (
	<Dialog fullScreen={true} open={true} TransitionComponent={Transition}>
		<AppBar sx={{ position: 'sticky' }} color='secondary'>
			<Toolbar>
				<IconButton
					edge='start'
					color='inherit'
					onClick={onClose}
					aria-label='close'
				>
					<CloseIcon />
				</IconButton>
				<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
					Voice Search Suggestions
				</Typography>
			</Toolbar>
		</AppBar>
		<List>
			{
				suggestions.map((v, i) => (
					<Fragment key={i}>
						<ListItem button>
							<Fragment >
								<ListItemText primary={<span><RecordVoiceOverIcon /> {v}</span>} />
							</Fragment>
						</ListItem>
						<Divider />
					</Fragment>
				))
			}
		</List>
	</Dialog>
)

export default Suggestions
