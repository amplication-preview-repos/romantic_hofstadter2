import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ComplaintWhereInput = {
  id?: StringFilter;
  carNumber?: StringFilter;
  description?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
