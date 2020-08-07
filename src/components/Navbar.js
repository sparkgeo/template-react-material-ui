import React from 'react'
// import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  '@global': {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 13,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 15,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 15,
      },
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

/**
 * Describe your component
 */
function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            A React Template using Material UI V4
          </Typography>
          <Button color="inherit">Beep</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
