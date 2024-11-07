import { $api } from "../constants/api";
import { IFlower, IResults } from "../types/apiTypes";

interface IFlowersGetAllParams {
  search?: string;
  is_promotion?: boolean;
  is_seasonal?: boolean;
  offset?: number;
  limit?: number;
}

class FlowersService {
  getAll(params?: IFlowersGetAllParams) {
    return $api<IResults<IFlower>>("flowers/", {
      params,
    });
  }
}

export default new FlowersService();
