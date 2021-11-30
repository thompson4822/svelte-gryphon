import type { Person } from './Person';

export interface PersonResponse {
	pageNo: number,
	pageSize: number,
	totalElements: bigint,
	totalPages: number,
	last: boolean,
	sortBy: string,
	content: Person[]
}