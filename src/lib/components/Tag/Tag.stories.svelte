<script context="module">
	import Tag from './Tag.svelte';

	export const meta = {
		title: 'Tag',
		component: Tag,
		decorators: [(Story) => Story()]
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Tag {...args} />
</Template>

<Story name="Default" args={{ text: 'default' }} />
<Story name="Active" args={{ status: 'active', text: 'active' }} />
<Story name="Upcoming" args={{ status: 'upcoming', text: 'upcoming' }} />
<Story name="Inactive" args={{ status: 'inactive', text: 'inactive' }} />
