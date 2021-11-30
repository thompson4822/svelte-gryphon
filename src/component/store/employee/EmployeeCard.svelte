<script>
	// Should show the employee image, their name, and their title
	export let employee = null;
</script>

<div class="card text-center shadow-2xl">
	<figure class="px-10 pt-10">
		<img src="data:image/png;base64,{employee.person.avatar}" class="rounded-full">
	</figure>
	<div class="card-body">
		<h2 class="card-title">{employee.person.firstName} {employee.person.lastName}</h2>
		<h3>{employee.role.name}</h3>
		<div class="justify-center card-actions">
			<button class="btn glass">More info</button>
		</div>
	</div>
</div>
