import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const varighetSliderMarks = [
  {
    value: 1,
    label: "1 år",
  },

  {
    value: 25,
    label: "25 år",
  },
  {
    value: 30,
    label: "30 år",
  },
];

const varighetValueText = (value) => `${value} år`;

const renteSliderMarks = [
  {
    value: 0.01,
    label: "0.01 %",
  },
  {
    value: 3.0,
    label: "3.00 %",
  },
  {
    value: 10.0,
    label: "10.00 %",
  },
];

const renteValueText = (value) => `${value} %`;

const CalcInputForm = ({
  handleSubmit,
  handleLaanebelopChange,
  handleNedbetalingstidChange,
  handleRenteChange,
}) => {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <div style={{ marginBottom: "50px" }}>
        <TextField label="Lånebeløp" onChange={handleLaanebelopChange} />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Typography id="discrete-slider-always" gutterBottom>
          Nedbetalingstid
        </Typography>
        <Slider
          name="varighetSlider"
          onChange={handleNedbetalingstidChange}
          defaultValue={25}
          step={1}
          min={1}
          max={30}
          getAriaValueText={varighetValueText}
          aria-labelledby="discrete-slider-always"
          marks={varighetSliderMarks}
          valueLabelDisplay="on"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Typography id="discrete-slider-always" gutterBottom>
          Velg rente
        </Typography>
        <Slider
          defaultValue={3.0}
          step={0.01}
          min={0.01}
          max={10.0}
          getAriaValueText={renteValueText}
          aria-labelledby="discrete-slider-always"
          marks={renteSliderMarks}
          valueLabelDisplay="on"
          onChange={handleRenteChange}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Beregn
        </Button>
      </div>
    </form>
  );
};

export default CalcInputForm;
