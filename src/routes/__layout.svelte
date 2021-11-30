<script>
	import "../app.css";
	import { onMount } from 'svelte';
	import { fetchConstants, genderConstants } from '../js/fetchConstants';

	let genders = $genderConstants

	onMount(async () => {
		await fetchConstants();
	})

	$: $genderConstants.forEach(value => {console.log(value)});

</script>
<!-- Try some classes here -->
<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
	<div class="flex-1 px-2 mx-2">
    <span class="text-lg font-bold">
            Gryphon Games
          </span>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
			</svg>
		</button>
	</div>
</div>

<div class='container mx-auto p-4'>
	<slot></slot>
</div>
