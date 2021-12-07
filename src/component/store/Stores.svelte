<script>
	import StoreCard from "./StoreCard.svelte";
	import LoadingSpinner from "../LoadingSpinner.svelte";

	let stores = []

	async function getStores() {
		let response = await fetch(`http://localhost:8080/api/store`);
		let data = await response.text();
		stores = JSON.parse(data);
	}

	$: getStores()

</script>

{#await getStores()}
	<LoadingSpinner/>
{:then value}
	<div class='grid grid-cols-5 gap-7'>
		{#each stores as store}
			<StoreCard {store}/>
		{/each}
	</div>
{/await}
