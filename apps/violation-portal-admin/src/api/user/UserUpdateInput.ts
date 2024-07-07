import { ComplaintUpdateManyWithoutUsersInput } from "./ComplaintUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  complaints?: ComplaintUpdateManyWithoutUsersInput;
  middleName?: string;
  middleNameNew?: string | null;
};
