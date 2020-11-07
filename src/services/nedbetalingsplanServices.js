import axios from "axios";
const baseUrl =
  "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";

const genererNedbetalingsplan =  async payload => {
  const request = axios.post(baseUrl, payload);
  const response = await request;
  return response.data;
};

export default { genererNedbetalingsplan };
