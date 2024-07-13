import api from "../BaseHttp";
import { IncomeFetchResponse } from "./IncomePayload";

const BASE_URL = "/getFixedIncomeClassData";
export class IncomeService {
  static fetchIncomes = (): Promise<IncomeFetchResponse> => {
    return api
      .get(BASE_URL)
      .then((response) => {
        return response.data.data as IncomeFetchResponse;
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error.error);
        throw error.error;
      });
  };
}
