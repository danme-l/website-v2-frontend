import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const DataSection = (props) => {
    return (
    <Box sx={{m: 3, p:3}} onClick={props.toggleDrawer}>    
        <Typography variant='h3'>Data</Typography>
        <Typography variant='body1'>Data taken from the International Monetary Fund via the FRED API, Federal Reserve Bank of St. Louis. Retrieved February 20, 2023. </Typography>
        <Table dense sx={{maxWidth:900}}>
            <TableHead>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Series ID</TableCell>
                    <TableCell>Link</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>The United States</TableCell>
                    <TableCell>HDTGPDUSQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDUSQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Canada</TableCell>
                    <TableCell>HDTGPDCAQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDCAQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>South Korea</TableCell>
                    <TableCell>HDTGPDKRQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDKRQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>The United Kingdom</TableCell>
                    <TableCell>HDTGPDGBQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDGBQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Australia</TableCell>
                    <TableCell>HDTGPDAUQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDAUQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Germany</TableCell>
                    <TableCell>HDTGPDDEQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDDEQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>France</TableCell>
                    <TableCell>HDTGPDFRA163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDFRQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Spain</TableCell>
                    <TableCell>HDTGPDESA163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDESQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>South Africa</TableCell>
                    <TableCell>HDTGPDZAQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDZAQ163N">Link</Link></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Poland</TableCell>
                    <TableCell>HDTGPDPLQ163N</TableCell>
                    <TableCell><Link href="https://fred.stlouisfed.org/series/HDTGPDPLQ163N">Link</Link></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Box>)
}