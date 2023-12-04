<script context="module">
	// import { Meta, Story } from "@storybook/addon-svelte-csf";
	import Offer from './Offer.svelte';

	export const meta = {
		title: 'Offer',
		component: Offer
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import type { Offer as IOffer } from '$lib/types/listing';
	let offer: IOffer = {
		description: 'Hello World!',
		endDay: 0,
		endHour: 2,
		startDay: 0,
		startHour: 1
	};
</script>

<Template let:args>
	<Offer {...args} />
</Template>

<Story name="Active" args={{ offer }} />
<Story name="Upcoming" args={{ offer }} />
<Story name="Inactive" args={{ offer }} />
