import type { Address } from './Address';
import type { Credentials } from './Credentials';
import { defaultAddress } from './Address';
import { defaultCredentials } from './Credentials';

export interface Person {
	id: number,
	firstName?: string,
	lastName?: string,
	phone?: string,
	address: Address,
	creditAmount: number,
	gender: string,
	avatar: number[],
	credentials: Credentials,
	email?: string
}

export const defaultPerson = () => ({
	id: null,
	firstName: '',
	lastName: '',
	email: '',
	address: defaultAddress(),
	phone: '',
	credentials: defaultCredentials(),
	creditAmount: 0,
	gender: '',
	avatar: []
});
