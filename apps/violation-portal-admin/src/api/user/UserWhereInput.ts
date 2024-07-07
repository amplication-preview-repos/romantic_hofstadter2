import { StringFilter } from "../../util/StringFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringFilter;
  lastName?: StringFilter;
  username?: StringFilter;
  email?: StringFilter;
  fullName?: StringFilter;
  phone?: StringFilter;
  complaints?: ComplaintListRelationFilter;
  middleName?: StringFilter;
  middleNameNew?: StringNullableFilter;
};
