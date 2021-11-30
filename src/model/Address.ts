export interface Address {
	addressLine1: string,
	addressLine2: string,
	city: string,
	state: string,
	zipCode: string

}

export const defaultAddress = () => ({
		addressLine1: '',
		addressLine2: '',
		city: '',
		state: '',
		zipCode: ''
});