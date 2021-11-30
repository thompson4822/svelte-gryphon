import type { Person } from './Person';

export interface Employee {
	id: bigint,
	ssn: string,
	hireDate: Date,
	exitDate: Date,
	person: Person,
	role: string,
	hourlyRate: number
}