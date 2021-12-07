<script lang="ts">
	import AddressForm from './AddressForm.svelte';
	import type {Person} from "../../model/Person";
	import {object, SchemaOf, string} from "yup";
//	import {add_const_tags_context} from "svelte/types/compiler/compile/render_dom/wrappers/shared/add_const_tags";
	import {defaultPerson} from "../../model/Person";

	export let person: Person = defaultPerson();

	let passwordRepeat: string;

	let disabled = true;

	let errors = {};

	$: disabled = (passwordRepeat && person.credentials.password) ? person.credentials.password != passwordRepeat : true;

	const personSchema: SchemaOf<Person> = object({
		firstName: string().required('Expected a first name'),
		lastName: string().required('Expected a last name'),
		email: string().email('Not a valid email').required('Expected an email address'),
		phone: string().min(9).max(9).matches(/\d+/, 'Not a valid phone number').required('Expected a phone # (9 digit)')
	}).defined();

	$: console.log(personSchema)

	const handleSubmit = async () => {
		console.log("Got a submit!")
		try {
			await personSchema.validate(person, {abortEarly: false});
			alert(JSON.stringify(person, null, 2));
			errors = {};
		} catch (err) {
			errors = err.inner.reduce((acc, err) => {
				return {...acc, [err.path]: err.message};
			}, {});
			console.log(errors);
		}
	};

</script>
<form on:submit|preventDefault={handleSubmit}>
	<div class='grid grid-cols-2 gap-4'>
		<div class='form-control'>
			<label for='firstName' class='label'><span class='label-text'>First Name</span></label>
			<input id='firstName' class='input input-bordered' bind:value={person.firstName}/>
			{#if errors.firstName}
				<label class="label"><span class="label-text-alt text-error">{errors.firstName}</span></label>
			{/if}
		</div>
		<div class='form-control'>
			<label for='lastName' class='label'><span class='label-text'>Last Name</span></label>
			<input id='lastName' class='input input-bordered' bind:value={person.lastName}/>
			{#if errors.lastName}
				<label class="label"><span class="label-text-alt text-error">{errors.lastName}</span></label>
			{/if}
		</div>
	</div>

	<AddressForm address={person.address}/>

	<div class='grid grid-cols-2 gap-4'>
		<div class='form-control'>
			<label for='phone' class='label'><span class='label-text'>Phone</span></label>
			<input id='phone' class='input input-bordered' bind:value={person.phone}/>
			{#if errors.phone}
				<label class="label"><span class="label-text-alt text-error">{errors.phone}</span></label>
			{/if}
		</div>

		<div class='form-control'>
			<label for='email' class='label'><span class='label-text'>E-mail</span></label>
			<input id='email' class='input input-bordered' bind:value={person.email} />
			{#if errors.email}
				<label class="label"><span class="label-text-alt text-error">{errors.email}</span></label>
			{/if}
		</div>
	</div>

	<div class='grid grid-cols-3 gap-4'>
		<div class='form-control'>
			<label for='username' class='label'><span class='label-text'>Username</span></label>
			<input id='username' class='input input-bordered' bind:value={person.credentials.username}/>
		</div>
		<div class='form-control'>
			<label for='password' class='label'><span class='label-text'>Password</span></label>
			<input id='password' class='input input-bordered' type='password' bind:value={person.credentials.password}/>
		</div>
		<div class='form-control'>
			<label for='password-repeat' class='label'><span class='label-text'>Password Repeat</span></label>
			<input id='password-repeat' class='input input-bordered' type='password' bind:value={passwordRepeat}/>
		</div>
	</div>
	<button class="btn mt-3" type="submit">Sign Up</button>
</form>
