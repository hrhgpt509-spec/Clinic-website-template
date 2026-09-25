import { Doctor, Department } from '../types/hospital';

export const mockDepartments: Department[] = [
  { id: 'd1', name: 'Cardiology', description: 'Heart and blood vessel diseases' },
  { id: 'd2', name: 'Neurology', description: 'Nervous system disorders' },
  { id: 'd3', name: 'Pediatrics', description: 'Medical care for infants, children, and adolescents' },
];

export const mockDoctors: Doctor[] = [
  {
    id: 'doc1',
    firstName: 'Jane',
    lastName: 'Doe',
    departmentId: 'd1',
    specialty: 'Interventional Cardiology',
    isAcceptingNewPatients: true,
    location: 'Main Campus, Building A',
    imageUrl: 'https://placehold.co/150x150/0056b3/ffffff?text=JD'
  },
  {
    id: 'doc2',
    firstName: 'John',
    lastName: 'Smith',
    departmentId: 'd2',
    specialty: 'Cognitive Neurology',
    isAcceptingNewPatients: true,
    location: 'West Wing, Suite 200',
    imageUrl: 'https://placehold.co/150x150/0056b3/ffffff?text=JS'
  },
  {
    id: 'doc3',
    firstName: 'Emily',
    lastName: 'Jones',
    departmentId: 'd3',
    specialty: 'Pediatric Oncology',
    isAcceptingNewPatients: false,
    location: 'Childrens Center, Floor 4',
    imageUrl: 'https://placehold.co/150x150/0056b3/ffffff?text=EJ'
  }
];

export const fetchDoctors = (): Promise<Doctor[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate random error for robust state handling testing (uncomment to test)
      // if (Math.random() > 0.8) throw new Error('Network error');
      resolve(mockDoctors);
    }, 1500);
  });
};

export const fetchDepartments = (): Promise<Department[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockDepartments), 1000));
};
