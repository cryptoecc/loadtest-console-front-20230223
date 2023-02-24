/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import * as React from 'react'
import {
  Box,
  TableContainer,
  Typography,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material'

function createData(index, ipAddress, power) {
  return { index, ipAddress, power }
}

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
    <Box flex={5}>
      <Box flex={1}>
        <Typography variant="h4">Tx bot list</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
        <Typography variant="h4">Tx bot list</Typography>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
  )
}
export default TestSet
