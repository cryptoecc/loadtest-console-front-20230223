/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React from 'react'
import './style/loadtest.css'
import styled from 'styled-components'
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'
const theme = createTheme({
  palette: {
    run: { main: '#b6d7a8' },
    stop: { main: '#ff9900' },
    save: { main: '#ffd966' },
  },
})
const Container = styled.div`
  font-size: 2em;
  display: flex;
  width: 85vw;
`
const Header = styled.header`
  font-size: 2.5em;
  font-weight: bold;
  padding: 1%;
`
const Formul = styled.ul`
  padding-left: 50px;
`
const Formli = styled.li`
  padding-bottom: 5vh;
`
function createData(name, value) {
  return { name, value }
}

const rows = [
  createData('tx success rate (%)', 97.0),
  createData('tx fail rate (%)', 3.0),
  createData('average block period (sec)', 100),
  createData('number of blocks', 10),
  createData('avaliable rpc nodes to send request to', 11),
]
const loadTest = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box flex={5}>
          <Header> Load test</Header>
          <Formul>
            <Formli>
              txbot status {}{' '}
              <Button size="large" variant="contained" color="run">
                Run
              </Button>{' '}
              <Button size="large" variant="contained" color="stop">
                Stop
              </Button>
            </Formli>
            <Formli>
              <TextField id="outlined-basic" variant="outlined" /> requests per
              time length <TextField id="outlined-basic" variant="outlined" />{' '}
              sec{' '}
              <Button size="large" variant="contained" color="save">
                Save
              </Button>
            </Formli>
            <Formli>
              target geth N nodes to send rrpc request to{' '}
              <TextField id="outlined-basic" variant="outlined" />{' '}
              <Button size="large" variant="contained" color="save">
                Save
              </Button>
            </Formli>
            <Formli>
              most recent N {"tx's"} to query{' '}
              <TextField id="outlined-basic" variant="outlined" />
            </Formli>
          </Formul>
          <TableContainer component={Paper} sx={{ width: '83.7vw' }}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: '1.2rem' }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    </Container>
  )
}
export default loadTest
