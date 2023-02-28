/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React from 'react'
import './style/loadtest.css'
import styled from 'styled-components'
import {
  Box,
  createTheme,
  ThemeProvider,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
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
const columns = [
  { id: 'number', label: 'Number', minWidth: 170 },
  { id: 'AnD', label: 'Alive/Dead', minWidth: 100 },
  {
    id: 'IP',
    label: 'IP Address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'CCBM',
    label: 'Cumulative count of blocks mined',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'HR',
    label: 'Hash\u00a0rate\u00a0(GH/s)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'uptime',
    label: 'Uptime\u00a0(hours)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

function createData(number, AnD, IP, CCBM, HR, uptime) {
  return { number, AnD, IP, CCBM, HR, uptime }
}

const rows = [
  createData('1', 'Alive', '24.144.97.105', 87, 0.3, 3406),
  createData('2', 'Alive', '212.184.50.196', 69, 0.5, 417),
  createData('3', 'Dead', '79.16.112.113', 18, 17, 2318),
  createData('4', 'Alive', '77.5.208.210', 62, 1.4, 2197),
  createData('5', 'Alive', '221.231.42.136', 61, 6.7, 311),
]
const loadTest = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Box flex={5}>
          <Header className="content-t"> Nodes status</Header>
          <Divider style={{ marginBottom: '30px' }} />
          <Formul>
            <Formli>
              total nodes {}{' '}&nbsp;
              <TextField id="outlined-basic" variant="outlined" />
            </Formli>
            <Formli>
              network hash rate{' '}&nbsp;
              <TextField id="outlined-basic" variant="outlined" />&nbsp;PH/s{' '}
            </Formli>
          </Formul>
          <TableContainer component={Paper} className="loadTable">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ width: '5vw', fontSize: '18px', fontWeight: '600' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{ fontSize: '16px' }}
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </ThemeProvider>
    </Container>
  )
}
export default loadTest
