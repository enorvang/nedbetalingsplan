import axios from "axios";

const baseUrl = "/api/nedbetalingsplanFraTil";

const genererNedbetalingsplan =  async (payload) => {
  const request = axios.post(baseUrl, payload);
  const response = await request;
  return response.data;
};

export default { genererNedbetalingsplan };
