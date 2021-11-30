<script>
	// This would be a number of cards showing a brief synopsis of every employee
	import EmployeeCard from './EmployeeCard.svelte';

	export let store = null;

	let employees = []

	async function getEmployees() {
		let response = await fetch(`http://localhost:8080/api/store/${store.id}/employees`);
		let data = await response.text();
		employees = JSON.parse(data);
	}

	$: getEmployees()

</script>

{#await getEmployees()}
	<p>Fetching people now ...</p>
{:then value}
	<div class='grid grid-cols-5 gap-7'>
		{#each employees as employee}
			<EmployeeCard {employee}/>
		{/each}
	</div>
{/await}