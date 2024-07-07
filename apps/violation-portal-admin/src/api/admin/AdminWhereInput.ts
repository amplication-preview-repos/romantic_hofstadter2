import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  username?: StringFilter;
  password?: StringFilter;
};
