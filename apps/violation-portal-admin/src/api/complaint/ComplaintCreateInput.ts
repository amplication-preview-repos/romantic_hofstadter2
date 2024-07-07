import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ComplaintCreateInput = {
  carNumber: string;
  description: string;
  status: "Option1";
  user?: UserWhereUniqueInput | null;
};
