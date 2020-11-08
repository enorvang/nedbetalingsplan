import axios from "axios";
const staccUrl =
  "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";

const baseUrl = "/api/nedbetalingsplanFraTil";

const deployedUrl = "https://lit-tundra-27242.herokuapp.com/api/nedbetalingsplanFraTil"

const genererNedbetalingsplan =  async payload => {
  const request = axios.post(baseUrl, payload);
  const response = await request;
  return response.data;
};

export default { genererNedbetalingsplan };
