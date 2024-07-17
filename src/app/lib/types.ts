export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export interface InternshipsType{
  id: number;
  company: string;
  role: string;
  location: string;
  date_posted: string;
  apply_link: string;
  created_by?: string;
  open_for_applications: boolean;
}
