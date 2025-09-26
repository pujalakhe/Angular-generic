import { Employee } from './model/employee-model';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    department: 'Engineering',
    role: 'Software Developer',
    joiningDate: new Date('2022-03-15'),
    salary: '70000',
  },
  {
    id: '2',
    name: 'Sneha Karki',
    department: 'Human Resources',
    role: 'HR Manager',
    joiningDate: new Date('2021-08-10'),
    salary: '60000',
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    department: 'Finance',
    role: 'Accountant',
    joiningDate: new Date('2023-01-05'),
    salary: '55000',
  },
  {
    id: '4',
    name: 'Priya Singh',
    department: 'Marketing',
    role: 'Digital Marketing Specialist',
    joiningDate: new Date('2020-11-20'),
    salary: '58000',
  },
  {
    id: '5',
    name: 'Kabir Thapa',
    department: 'Engineering',
    role: 'DevOps Engineer',
    joiningDate: new Date('2019-07-01'),
    salary: '75000',
  },
];
