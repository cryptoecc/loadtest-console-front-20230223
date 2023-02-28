/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import * as React from 'react'
import styled from 'styled-components'
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TextField, Divider,
} from '@mui/material'

function createData(index, ipAddress, power) {
  return { index, ipAddress, power }
}
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

const txRows = [
  createData(1, '24.114.97.105', 'off'),
  createData(2, '212.184.50.196', 'on'),
  createData(3, '79.16.112.113', 'on'),
  createData(4, '77.65.208.210', 'off'),
  createData(5, '221.231.42.136', 'on'),
]
const nlRows = [
  createData(1, '146.27.98.209', 'exclude'),
  createData(2, '59.34.68.28', 'include'),
  createData(3, '141.80.46.238', 'exclude'),
  createData(4, '58.248.142.80', 'include'),
  createData(5, '210.8.91.250', 'include'),
]
const TestSet = () => {
  return (
      <Container>
    <Box flex={5}>
      <Box flex={1}>
        <Header className="content-t">Tx bot list</Header>
        <Divider style={{ marginBottom: '30px' }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">ipAddress</TableCell>
                <TableCell align="right">on/off</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {txRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.ipAddress}</TableCell>
                  <TableCell align="right">{row.power}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box flex={1}>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="medium"
          size="medium"
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '300px' }} size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">ipAddress</TableCell>
                <TableCell align="right">include/exclude</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nlRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.ipAddress}</TableCell>
                  <TableCell align="right">{row.power}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
      </Container>
  )
}
export default TestSet
