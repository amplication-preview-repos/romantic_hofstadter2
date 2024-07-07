import { Complaint as TComplaint } from "../api/complaint/Complaint";

export const COMPLAINT_TITLE_FIELD = "carNumber";

export const ComplaintTitle = (record: TComplaint): string => {
  return record.carNumber?.toString() || String(record.id);
};
