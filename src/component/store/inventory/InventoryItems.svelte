<script>
	import InventoryCard from './InventoryCard.svelte';

	export let store = null;
	/*
	The following would be a collection of { product, units }
	 */
	let inventoryItems = [];

	async function getInventoryItems() {
		let response = await fetch(`http://localhost:8080/api/store/${store.id}/product`);
		let data = await response.text();
		inventoryItems = JSON.parse(data);
	}

	$: getInventoryItems()


</script>

{#each inventoryItems as item}
	<!-- Needs to be prettied up to show a brief synopsis of each product -->
	<InventoryCard {item}/>
{/each}