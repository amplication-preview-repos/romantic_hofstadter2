import { Complaint } from "../complaint/Complaint";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  fullName: string;
  phone: string;
  complaints?: Array<Complaint>;
  middleName: string;
  middleNameNew: string | null;
};
