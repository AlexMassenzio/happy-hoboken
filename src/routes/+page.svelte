<script lang="ts">
	import Offer from '../lib/components/Offers/Offer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="contianer mx-auto px-5">
	{#each data.listings as listing}
		<div class="m-5 px-3 border">
			<h1>{listing.name}</h1>
			<h2><a href={listing.location}>{listing.location}</a></h2>
			{#each listing.schedule as offer}
				<Offer {offer} />
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
