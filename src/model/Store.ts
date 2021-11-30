import type { Address } from './Address';

export interface Store {
	id: bigint,
	address: Address,
	phone: string,
	email: string,
	website: string,
	tax: number,
	image: number[]
}