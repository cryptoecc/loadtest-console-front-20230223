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
  Paper, Divider,
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
  width: 100%;
`
const Header = styled.header`
  font-size: 2.5em;
  font-weight: bold;
  padding: 1%;
`
const Formul = styled.ul`
  padding-left: 20px;
`
const Formli = styled.li`
  padding-bottom: 20px;
  font-size: 18px;
`
function createData(name, value) {
  return { name, value }
}

const rows = [
  createData(<p>tx success rate <span>%</span></p>, 97.0),
  createData(<p>tx fail rate <span>%</span></p>, 3.0),
  createData(<p>average block period <span>sec</span></p>, 100),
  createData(<p>number of blocks</p>, 10),
  createData(<p>avaliable rpc nodes to send request to</p>, 11),
]
const loadTest = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box flex={5}>
          <Header className="content-t">Load test</Header>
          <Divider style={{ marginBottom: '30px' }} />
          <Formul>
            <Formli>
              txbot status {}{' '}&nbsp;
              <Button size="small" variant="contained" color="run">
                Run
              </Button>{' '}&nbsp;
              <Button size="small" variant="contained" color="stop">
                Stop
              </Button>
            </Formli>
            <Formli>
              <TextField id="outlined-basic" variant="outlined" />&nbsp; requests per
              time length &nbsp;<TextField id="outlined-basic" variant="outlined" />{' '}
              &nbsp;sec{' '}&nbsp;
              <Button size="large" variant="contained" color="save">
                Save
              </Button>
            </Formli>
            <Formli>
              target geth N nodes to send rrpc request to{' '}&nbsp;
              <TextField id="outlined-basic" variant="outlined" />{' '}&nbsp;
              <Button size="large" variant="contained" color="save">
                Save
              </Button>
            </Formli>
            <Formli>
              most recent N {"tx's"} to query{' '}&nbsp;
              <TextField id="outlined-basic" variant="outlined" />
            </Formli>
          </Formul>
          <TableContainer component={Paper} className="loadTable">
            <Table aria-label="a dense table">
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
