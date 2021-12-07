import * as yup from 'yup';

const personSchema = yup.object({
	firstName: yup
		.string().typeError('Who knew?')
		.required("First name expected"),
	lastName: yup
		.string()
		.required("Last name expected"),
	email: yup
		.string()
		.email("Email formatted incorrectly")
		.required("Email expected"),
	phone: yup
		.string().min(9).max(9).matches(/\d+/, "Phone number should be digits")
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
