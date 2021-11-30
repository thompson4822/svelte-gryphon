import * as yup from 'yup';

const personSchema = yup.object({
	firstName: yup
		.string()
		.defined(),
	lastName: yup
		.string()
		.defined(),
	email: yup
		.string()
		.email()
		.defined()
	/*
		firstName: '',
	lastName: '',
	email: '',
	address: defaultAddress(),
	phone: '',
	credentials: defaultCredentials(),
	creditAmount: 0,
	gender: '',
	avatar: []

	 */
})