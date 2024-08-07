export interface SignUpFormDataType {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface InternshipsType {
  id: number;
  company: string;
  role: string;
  location: string;
  date_posted: string;
  apply_link?: string;
  created_by?: string;
  open_for_applications: boolean;
}

export interface SignUpResponseType {
  message: string;
}

export interface TableResponseType {
  internships?: InternshipsType[];
  message?: string;
}

export interface JoinTableType {
  id: number;
  user_id?: string;
  internship_id?: number;
  status: "Closed" | "Pending" | "Interviewed" | "Hired" | "Hidden" | "Saved";
  date_applied: string;
  application_dashboard?: string;
  internships?: InternshipsType;
}

export interface UserInternshipRequestType {
  internshipId: number;
  status: "Closed" | "Pending" | "Interviewed" | "Hired" | "Hidden" | "Saved";
}

export interface ApplicationCountsType {
  All: number;
  Pending: number;
  Closed: number;
  Interviewed: number;
  Hired: number;
}

export interface StatusCountType {
  status: "Pending" | "Closed" | "Interviewed" | "Hired";
  _count: {
    status: number;
  };
}

export interface UpsertApplicationRequest{
  company: string;
  role: string;
  location: string;
  datePosted: string;
  dateApplied: string;
  applicationDashboard: string;
  status: ("Closed" | "Pending" | "Interviewed" | "Hired");
  addOrEdit: "Edit" | "Add"
  internship_id: number
}

export type SingleFilterType = Record<string, string[]>;

export type FiltersType = SingleFilterType;
