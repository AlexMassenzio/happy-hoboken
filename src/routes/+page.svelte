<script lang="ts">
	import listings from '$lib/data/listings';
	import { buildDateFromOffer } from '$lib/offerUtils';
</script>

<div class="contianer mx-auto px-5">
	{#each listings as listing}
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
					{#each listing.links as img}
						<img alt="img" src={img} />
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
