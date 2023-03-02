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
  Checkbox,
} from '@mui/material'

function createData(index, ipAddress, power) {
  return { index, ipAddress, power }
}

const txRows = [
  createData(1, '24.114.97.105', false),
  createData(2, '212.184.50.196', true),
  createData(3, '79.16.112.113', true),
  createData(4, '77.65.208.210', false),
  createData(5, '221.231.42.136', true),
]
const nlRows = [
  createData(1, '146.27.98.209', false),
  createData(2, '59.34.68.28', true),
  createData(3, '141.80.46.238', false),
  createData(4, '58.248.142.80', true),
  createData(5, '210.8.91.250', true),
]
const TestSet = () => {
  return (
    <Box flex={5} display={'flex'}>
      <Box flex={1} p={10}>
        <Typography variant="h4">Tx bot list</Typography>
        <TextField id="outlined-size-small" size="small" />
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
                  <TableCell align="right">
                    {row.power ? <Checkbox defaultChecked /> : <Checkbox />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box flex={1} p={10}>
        <Typography variant="h4">Tx bot list</Typography>
        <TextField id="outlined-size-small" size="small" />
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
                  <TableCell align="right">
                    {row.power ? <Checkbox defaultChecked /> : <Checkbox />}
                  </TableCell>
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
