import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CalcInputForm from "./components/CalcInputForm";
import nedbetalingsplanService from "./services/nedbetalingsplanServices";
import "fontsource-roboto";
import { Container } from "@material-ui/core";
import Nedbetalingsplan from "./components/Nedbetalingsplan.js";
import Notification from "./components/Notification";

const title = "Lånekalkulator";
const gebyr = 30;

const App = () => {
  const [nedbetalingsplan, setNedbetalingsplan] = useState({});
  const [laanebelop, setLaanebelop] = useState(0);
  const [rente, setRente] = useState(3.0); //default 3.0% rente
  const [varighet, setVarighet] = useState(25); //default 25% rente
  const [utlopsDato, setUtlopsDato] = useState("");
  const [saldoDato, setSaldoDato] = useState("");
  const [datoForsteInnbetaling, setDatoForsteInnbetaling] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);


  const notify = text => {
    setNotificationMessage(text)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }

  /**
   * Håndterer endringer i tekst-input elementet der bruker velger lånebeløp
   * @param {DOMEvent} event
   */
  const handleLaanebelopChange = (event) => {
    setLaanebelop(event.target.value);
  };

  /**
   * Håndterer rangeslideren der bruker velger lånets varighet
   * @param {DOMEvent} event
   */
  const handleVarighetChange = (event, value) => {
    setVarighet(value);
  };

  /**
   * Håndterer endring av rangeslideren der bruker velger rente
   * @param {DOMEvent} event
   */
  const handleRenteChange = (event, value) => {
    setRente(value);
  };

  /**
   * Når all data sendes vil denne metoden sette nedbetalingsplanen i state.
   * @param {DOMEvent} event
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const idag = new Date();
    const idagFormatert = idag.toISOString().substring(0, 10);
    setSaldoDato(idagFormatert);

    const forsteInnbetalingDato = new Date(
      idag.getFullYear(),
      idag.getMonth() + 1,
      idag.getDate()
    );
    const forsteInnbetalingDatoFormatert = forsteInnbetalingDato
      .toISOString()
      .substring(0, 10);
    setDatoForsteInnbetaling(forsteInnbetalingDatoFormatert);

    let utlopsAar = idag.getFullYear() + varighet;
    let utlopsMnd = idag.getMonth();
    let utlopsDag = idag.getDate();
    
    const datoForSisteInnbetaling = new Date(utlopsAar, utlopsMnd, utlopsDag);
    const datoForSisteInnbetalingFormatert = datoForSisteInnbetaling
      .toISOString()
      .substring(0, 10);
    setUtlopsDato(datoForSisteInnbetaling);

    const payload = {
      laanebelop: laanebelop,
      nominellRente: rente,
      terminGebyr: gebyr,
      // varighet: varighet,
      utlopsDato: datoForSisteInnbetalingFormatert,
      saldoDato: idagFormatert,
    };
    

    nedbetalingsplanService
      .genererNedbetalingsplan(payload)
      .then((returned) => {
        setNedbetalingsplan(returned);
        notify(`Nedbetalingsplan generert`)
      })
      .catch((error) => notify(`Feil, lånebeløp må være over 10,000 kr`));

  };

    
  return (
      <Container fixed>
        <Header title={title} />
        <Notification message={notificationMessage}/>
        <CalcInputForm
          handleSubmit={handleFormSubmit}
          handleLaanebelopChange={handleLaanebelopChange}
          handleNedbetalingstidChange={handleVarighetChange}
          handleRenteChange={handleRenteChange}
        />
        <div style={{marginTop: "10px"}}>
        {nedbetalingsplan.length > 0 && 
          <Nedbetalingsplan nedbetalingsplan={nedbetalingsplan}/>
        }
        </div>
        
      </Container>
  );
};

export default App;
