import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ComplaintUpdateInput = {
  carNumber?: string;
  description?: string;
  status?: "Option1";
  user?: UserWhereUniqueInput | null;
};
