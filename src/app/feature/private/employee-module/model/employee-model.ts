export interface Employee {
  id?: string;
  name: string;
  department: string;
  role: string;
  joiningDate: Date;
  salary: string;
  cv?: string; // uploaded CV file
  photo?: string; // uploaded photo file
}

// For example, if after upload you store the URL:

// cv: string;    // URL to CV
// photo: string; // URL to photo
