<script lang="ts">
	import PersonForm from '../../component/person/PersonForm.svelte';
	import type { Person } from '../../model/Person';
	import { defaultPerson } from '../../model/Person';

	let person: Person = defaultPerson();
</script>

<h1 class='text-3xl text-center'>Sign Up</h1>
<PersonForm {person}/>

<a href='/'>Home</a>