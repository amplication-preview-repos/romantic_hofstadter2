import { User } from "../user/User";

export type Complaint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carNumber: string;
  description: string;
  status?: "Option1";
  user?: User | null;
};
