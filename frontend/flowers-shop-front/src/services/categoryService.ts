import { $api } from "../constants/api";
import { ICategory } from "../types/apiTypes";

class CategoryService {
  getAll() {
    return $api<ICategory[]>("categories/");
  }
}

export default new CategoryService();
