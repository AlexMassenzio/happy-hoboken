<script lang="ts">
	import { buildDateFromOffer } from '$lib/offerUtils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="contianer mx-auto px-5">
	{#each data.listings as listing}
		<div class="m-5 px-3 border">
			<h1>{listing.name}</h1>
			<h2><a href={listing.location}>{listing.location}</a></h2>
			{#each listing.schedule as offer}
				<div class="p-3 border">
					<h3>{buildDateFromOffer(offer)}</h3>
					<h3>{offer.description}</h3>
				</div>
			{/each}
			{#if listing.links?.length}
				<!-- image holder -->
				<div class="">
					{#each listing.links as link}
						{#if link.includes('.png')}
							<img alt="img" src={link} />
						{:else}
							<a href={link} target="_blank">{link}</a>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
