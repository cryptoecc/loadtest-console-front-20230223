/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'
import { Box, ListItem, Typography, Paper, MenuList, MenuItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        height: '97.46vh',
        background: '#e2e2e2',
        maxWidth: '230px',
      }}
    >
        <ListItem alignItems="center" style={{ margin: '50px 0 30px 0' }} className="logo">
          <Typography variant="h5">LV WL Chain</Typography>
        </ListItem>
        <ListItem alignItems="center">
          <Typography>ID = 12345</Typography>
        </ListItem>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <Link
                to="/loadtest"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <ListItemText>Load Test</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
                to="/status"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <ListItemText>Node Status</ListItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
                to="/setting"
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <ListItemText>Settings</ListItemText>
            </Link>
          </MenuItem>
        </MenuList>
      </Paper>
    </Box>
  )
}

export default Sidebar
