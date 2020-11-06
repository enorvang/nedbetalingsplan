import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CalcInputForm from "./components/CalcInputForm";
import nedbetalingsplanService from "./services/nedbetalingsplanServices";
const title = "Lånekalkulator";

const App = () => {
  const [nedbetalingsplan, setNedbetalingsplan] = useState({});

  const dummyPayload = {
    laanebelop: 2000000,
    nominellRente: 3,
    terminGebyr: 30,
    utlopsDato: "2045-01-01",
    saldoDato: "2020-01-01",
    datoForsteInnbetaling: "2020-02-01",
    ukjentVerdi: "TERMINBELOP",
  };

  useEffect(() => {
    nedbetalingsplanService
      .lagNedbetalingsplan(dummyPayload)
      .then((plan) => {
        console.log(plan.nedbetalingsplan)
        setNedbetalingsplan(plan);
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <Header title={title} />
      <CalcInputForm />
    </div>
  );
};

export default App;
