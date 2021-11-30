<script lang="ts">
	import {Person} from '../../model/Person'
	export let person: Person;
</script>
<!--
<div>
	<img src='data:image/png;base64,{person.avatar}' alt='avatar' width='100' height='100'>
	<p>{person.firstName} {person.lastName}</p>
	<p>{person.email}</p>
</div>
-->
<div class="person card text-center shadow-2xl">
	<figure class="px-10 pt-10">
		<img src="data:image/png;base64,{person.avatar}" class="rounded-full">
	</figure>
	<div class="card-body">
		<h2 class="card-title">{person.firstName} {person.lastName}</h2>
		<div class="justify-center card-actions">
			<button class="btn glass">More info</button>
		</div>
	</div>
</div>
