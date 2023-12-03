<script lang="ts">
	import { buildDateFromOffer } from '$lib/offerUtils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="contianer mx-auto px-10">
	{#each data.listings as listing}
		<div class="">
			<h1>{listing.name}</h1>
			<h2><a href={listing.location}>{listing.location}</a></h2>
			{#each listing.schedule as offer}
				<h3>{buildDateFromOffer(offer)}</h3>
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
