<script lang="ts">
	import type { Address } from '../../model/Address';
	import { genderConstants, stateConstants } from '../../js/fetchConstants';

	export let address: Address

	$: console.log(address.state);

</script>

<div class='form-control'>
	<label for='addressLine1' class='label'><span class='label-text'>Address Line 1</span></label>
	<input id='addressLine1' class='input input-bordered' bind:value={address.addressLine1}/>
</div>
<div class='form-control'>
	<label for='addressLine2' class='label'><span class='label-text'>Address Line 2</span></label>
	<input id='addressLine2' class='input input-bordered' bind:value={address.addressLine2}/>
</div>

<div class='grid grid-cols-3 gap-4'>
	<div class='form-control'>
		<label for='city' class='label'><span class='label-text'>City</span></label>
		<input id='city' class='input input-bordered' bind:value={address.city}/>
	</div>
	<div class='form-control'>
		<label for='state' class='label'><span class='label-text'>State</span></label>
		<select id='state' class="select select-bordered w-full max-w-xs" bind:value={address.state}>
			<option disabled="disabled" selected="selected"></option>
			{#each $stateConstants as state}
				<option value={state}>{state}</option>
			{/each}
		</select>
	</div>
	<div class='form-control'>
		<label for='zip' class='label'><span class='label-text'>Zip</span></label>
		<input id='zip' class='input input-bordered' bind:value={address.zip}/>
	</div>
</div>
