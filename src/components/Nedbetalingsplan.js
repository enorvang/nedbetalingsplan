import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Nedbetalingsplan = ({ nedbetalingsplan }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Restgjeld</TableCell>
            <TableCell>Dato</TableCell>
            <TableCell>Innbetaling</TableCell>
            <TableCell>Gebyr</TableCell>
            <TableCell>Renter</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nedbetalingsplan.map((row) => (
            <TableRow key={row.dato}>
              <TableCell component="th" scope="row">
                {row.restgjeld}
              </TableCell>
              <TableCell>{row.dato}</TableCell>
              <TableCell>{row.innbetaling}</TableCell>
              <TableCell>{row.gebyr}</TableCell>
              <TableCell>{row.renter}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Nedbetalingsplan;
