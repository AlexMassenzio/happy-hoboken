<script lang="ts">
	import listings from '$lib/data/lilstings';
</script>

{#each listings as listing}
	<h1>{listing.name}</h1>
	<h2><a href={listing.location}>{listing.location}</a></h2>
	{#each listing.schedule as offer}
		<h3>{offer.description}</h3>
	{/each}
{/each}
