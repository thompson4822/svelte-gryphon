<script lang="ts">
	import PersonCard from './PersonCard.svelte';
	import { Person } from '../../model/Person';

	let personResult: Person[] = [];

	async function getPeople() {
		try {
			let response = await fetch('http://localhost:8080/api/person');
			let data = await response.text();
			personResult = (JSON.parse(data)).content;
		} catch(err) {
			console.log(err)
		}
	}

	$: getPeople()
</script>

{#await getPeople()}
	<p>Fetching people now ...</p>
{:then value}
	<h1 class='text-4xl text-center py-5'>Customers</h1>
	<div class='grid grid-cols-5 gap-7'>
		{#each personResult as person}
			<div>
				<PersonCard {person}/>
			</div>
		{/each}
	</div>
<!--
	<p>There are a total of {personResult.totalElements} people</p>
	<p>This is page# {personResult.pageNo}</p>
	<p>The number of returned elements was {personResult.content.length}</p>
-->
	<p></p>
{/await}
