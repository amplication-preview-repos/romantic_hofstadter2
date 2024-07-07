import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  carNumber?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
};
