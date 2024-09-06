<template>
	<button
		:class="[props.bgColor, 'text-white p-2 rounded-md']"
		:disabled="props.disabled"
		:title="props.tooltip"
		@click="props.onClick"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(
	defineProps<{
		disabled: boolean;
		onClick: () => void;
		bgColor?: string;
		tooltip: string;
	}>(),
	{
		bgColor: 'bg-blue-500',
		tooltip: '',
	},
);
</script>

<style scoped>
button {
	transition:
		transform 0.1s ease,
		box-shadow 0.1s ease;
}

button:not(:disabled):hover {
	transform: scale(1.05);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
