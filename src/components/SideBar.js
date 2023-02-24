/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        border: '1px solid black',
        height: '97.46vh',
      }}
    >
      <List>
        <ListItem alignItems="center">
          <Typography variant="h4">LV WL Chain</Typography>
        </ListItem>
        <ListItem alignItems="center">
          <Typography variant="h5">id=12345</Typography>
        </ListItem>
        <ListItem alignItems="center" p={2}>
          <Link
            to="/loadtest"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography variant="h5">Load Test </Typography>
          </Link>
        </ListItem>
        <ListItem alignItems="center" p={2}>
          <Link
            to="/status"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography variant="h5">Node Status</Typography>
          </Link>
        </ListItem>
        <ListItem alignItems="center" p={2}>
          <Link
            to="/setting"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography variant="h5">Settings</Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar
