import { ComplaintCreateNestedManyWithoutUsersInput } from "./ComplaintCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  phone: string;
  complaints?: ComplaintCreateNestedManyWithoutUsersInput;
  middleName: string;
  middleNameNew?: string | null;
};
