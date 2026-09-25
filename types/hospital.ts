export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  departmentId: string;
  specialty: string;
  isAcceptingNewPatients: boolean;
  location?: string;
  imageUrl?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  headDoctorId?: string;
}

export interface AppointmentRequest {
  id: string;
  patientId: string;
  doctorId: string;
  departmentId: string;
  preferredDate: Date;
  reasonForVisit: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: Date;
}
