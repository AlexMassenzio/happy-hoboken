<script lang="ts">
	import { buildDateFromOffer } from '$lib/offerUtils';
	import type { Offer } from '$lib/types/listing';
	export let offer: Offer;
</script>

<div class="p-3 border">
	<h3>{buildDateFromOffer(offer)}</h3>
	<h3>{offer.description}</h3>
</div>
