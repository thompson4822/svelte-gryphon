import { get, writable } from 'svelte/store';
import { update_await_block_branch } from 'svelte/internal';

interface HttpResponse<T> extends Response {
	parsedBody?: T
}

export const genderConstants = writable<string[]>([]);

export const stateConstants = writable<string[]>([]);

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
	const response: HttpResponse<T> = await fetch(request);
	response.parsedBody = await response.json();
	return response;
}

const fetchGenders = async () => {
	if(get(genderConstants).length == 0) {
		const response = await http<string[]>('http://localhost:8080/api/constant/genders');
		genderConstants.set(response.parsedBody);
	}
}

const fetchStates = async () => {
	if(get(stateConstants).length == 0) {
		const response = await http<string[]>('http://localhost:8080/api/constant/states');
		stateConstants.set(response.parsedBody);
	}
}

export const fetchConstants = async () => {
	await fetchGenders();
	await fetchStates();
}