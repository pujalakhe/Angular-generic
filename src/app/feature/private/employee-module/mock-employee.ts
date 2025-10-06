import { Employee } from './model/employee-model';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    department: 'MOCK_EMPLOYEE.DEPARTMENT.ENGINEERING',
    role: 'MOCK_EMPLOYEE.ROLE.SOFTWARE_DEVELOPER',
    joiningDate: new Date('2022-03-15'),
    salary: '70000',
  },
  {
    id: '2',
    name: 'Sneha Karki',
    department: 'MOCK_EMPLOYEE.DEPARTMENT.HR',
    role: 'MOCK_EMPLOYEE.ROLE.HR_MANAGER',
    joiningDate: new Date('2021-08-10'),
    salary: '60000',
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    department: 'MOCK_EMPLOYEE.DEPARTMENT.FINANCE',
    role: 'MOCK_EMPLOYEE.ROLE.ACCOUNTANT',
    joiningDate: new Date('2023-01-05'),
    salary: '55000',
  },
  {
    id: '4',
    name: 'Priya Singh',
    department: 'MOCK_EMPLOYEE.DEPARTMENT.MARKETING',
    role: 'MOCK_EMPLOYEE.ROLE.DIGITAL_MARKETING',
    joiningDate: new Date('2020-11-20'),
    salary: '58000',
  },
  {
    id: '5',
    name: 'Kabir Thapa',
    department: 'MOCK_EMPLOYEE.DEPARTMENT.ENGINEERING',
    role: 'MOCK_EMPLOYEE.ROLE.DEVOPS',
    joiningDate: new Date('2019-07-01'),
    salary: '75000',
  },
];
