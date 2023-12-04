<script lang="ts">
	const statusColors = {
		default: {
			background: 'bg-periwinkle',
			bullet: 'bg-white',
			color: 'text-[#F1F1F9]'
		},
		active: {
			background: 'bg-cerulean',
			bullet: 'bg-[#D9F5FC]',
			color: 'text-[#D9F5FC]'
		}
	};

	export let status: keyof typeof statusColors = 'default';
	export let text: string;

	const { background, bullet, color } = statusColors[status] ?? statusColors.default;
</script>

<div class="rounded-full inline-block {background}">
	<div class="flex flex-row items-center">
		<div class="w-2 h-2 ml-2 mr-1 rounded-full {bullet}" />
		<span class="text-xs font-bold -mt-1 py-2 mr-2 {color}">{text}</span>
	</div>
</div>
