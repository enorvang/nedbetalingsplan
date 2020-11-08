import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const columns = [
  {
    id: "restgjeld",
    label: "Restgjeld",
    minWidth: 100,
    format: (value) => value.toLocaleString('nb-NO') + " kr",
  },
  { id: "dato", label: "Dato", minWidth: 100 },
  {
    id: "innbetaling",
    label: "Innbetaling",
    minWidth: 100,
    format: (value) => value.toLocaleString('nb-NO') + " kr",
  },
  {
    id: "gebyr",
    label: "Gebyr",
    minWidth: 100,
    format: (value) => value.toLocaleString('nb-NO') + " kr",
  },
  {
    id: "renter",
    label: "Renter",
    minWidth: 100,
    format: (value) => value.toLocaleString('nb-NO') + " kr",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 100,
    format: (value) => value.toLocaleString('nb-NO') + " kr",
  },
];
const useStyles = makeStyles({
  root: {
    width: "80%",
  },
  container: {
    maxHeight: 440,
  },
});

const Nedbetalingsplan = ({ nedbetalingsplan }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {nedbetalingsplan
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.dato}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={nedbetalingsplan.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Nedbetalingsplan;
