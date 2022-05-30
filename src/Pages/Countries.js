import React, {useState, useEffect} from "react";
import axios from 'axios';
import "../App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function Countries () {
    const [countries, setCountries] = useState([]);
    useEffect(
        () => {
            axios
            .get("https://restcountries.com/v3.1/all")
            .then( res => {
                console.log(res.data)
                setCountries(res.data)
            })
            .catch( err => {
                console.log(err);
            })
        }
    )    
    // const classes = useStyles();

    return (
       <div >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell > Country </StyledTableCell>
                        <StyledTableCell > Region </StyledTableCell>
                        <StyledTableCell > Flag </StyledTableCell>
                        <StyledTableCell > Population</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {countries.map((row) => (
                        <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <StyledTableCell component="th" scope="row">
                            {row.name.common}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {row.region}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                             <img src={row.flags.png} alt={row.name.common}/>
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                            {row.population}
                        </StyledTableCell>

                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            
    
           {/* <ul>
               {
              countries.map(
                    country => (  
                    <div className="App" key = {country.id}>
                        <li> {country.name.common} </li>
                        <img src={country.flags.png} alt={country.name.common}/>
                        <p> {country.region}</p>
                        {country.population}
                    </div>   
                    
                    )
                )
               }

           </ul> */}

       </div>
    )
} 

export default Countries;