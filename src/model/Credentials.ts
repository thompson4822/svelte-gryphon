
export interface Credentials {
	id: number,
	username: string,
	password: string
}

export const defaultCredentials = () => ({ id: null, password: '', username: '' })