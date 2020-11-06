import axios from "axios";
const baseUrl =
  "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";

const lagNedbetalingsplan =  payload => {
  const request = axios.post(baseUrl, payload);
  return request.then((response) => response.data);
};

export default { lagNedbetalingsplan };
