<script lang="ts">
	import type { Person } from '../../model/Person';
	import AddressForm from './AddressForm.svelte';

	export let person: Person;

	let passwordRepeat: string;

	let disabled = true;

	$: disabled = (passwordRepeat && person.credentials.password) ? person.credentials.password != passwordRepeat : true;

</script>
<div class='grid grid-cols-2 gap-4'>
	<div class='form-control'>
		<label for='firstName' class='label'><span class='label-text'>First Name</span></label>
		<input id='firstName' class='input input-bordered' bind:value={person.firstName}/>
	</div>
	<div class='form-control'>
		<label for='lastName' class='label'><span class='label-text'>Last Name</span></label>
		<input id='lastName' class='input input-bordered' bind:value={person.lastName}/>
	</div>
</div>

<AddressForm address={person.address}/>

<div class='grid grid-cols-2 gap-4'>
	<div class='form-control'>
		<label for='phone' class='label'><span class='label-text'>Phone</span></label>
		<input id='phone' class='input input-bordered' bind:value={person.phone}/>
	</div>

	<div class='form-control'>
		<label for='email' class='label'><span class='label-text'>E-mail</span></label>
		<input id='email' class='input input-bordered' bind:value={person.email} />
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
<button class="btn mt-3" {disabled}>Sign Up</button>
