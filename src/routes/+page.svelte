<script lang="ts">
	import listings from '$lib/data/lilstings';
</script>

<div class="contianer mx-auto px-10">
	{#each listings as listing}
		<div class="">
			<h1>{listing.name}</h1>
			<h2><a href={listing.location}>{listing.location}</a></h2>
			{#each listing.schedule as offer}
				<h3>{offer.description}</h3>
			{/each}
			{#if listing.links?.length}
				<!-- image holder -->
				<div class="">
					{#each listing.links as img}
						<img alt="img" src={img} />
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
