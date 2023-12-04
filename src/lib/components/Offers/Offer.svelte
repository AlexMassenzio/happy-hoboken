<script lang="ts">
	import { buildDateFromOffer } from '$lib/offerUtils';
	import type { Offer } from '$lib/types/listing';
	import Tag from '../Tag/Tag.svelte';
	export let offer: Offer;
</script>

<div class="p-4 border shadow">
	<div>
		<h1 class="text-xl">{offer.description}</h1>
		<div>
			<Tag status="active" text="active" />
			<h2 class="text-sm">{buildDateFromOffer(offer)}</h2>
		</div>
	</div>
</div>
