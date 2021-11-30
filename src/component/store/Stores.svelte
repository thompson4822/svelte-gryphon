<script>
	import StoreDetails from './StoreDetails.svelte';

	let stores = []

	async function getStores() {
		let response = await fetch(`http://localhost:8080/api/store`);
		let data = await response.text();
		stores = JSON.parse(data);
	}

	$: getStores()

</script>

{#await getStores()}
	<p>Fetching people now ...</p>
{:then value}
	<div class='grid grid-cols-5 gap-7'>
		{#each stores as store}
			<StoreDetails {store}/>
		{/each}
	</div>
{/await}