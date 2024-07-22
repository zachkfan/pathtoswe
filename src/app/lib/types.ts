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
  apply_link: string;
  created_by?: string;
  open_for_applications: boolean;
}

export interface SignUpResponseType {
  message: string;
}

export interface JoinTable{
  id : number;
  user_id?: string;
  internship_id?: number;
  status: "Closed"|"Pending"|"Interviewed"|"Hired"|"Hidden"|"Saved";
  internships: InternshipsType;
}

export interface UserInternshipRequest{
  internshipId: number;
  status: "Closed"|"Pending"|"Interviewed"|"Hired"|"Hidden"|"Saved";
}
