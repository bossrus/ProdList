<template>
	<MyButton
		:disabled="props.disabled"
		:on-click="props.onClick"
		bg-color="text-gray-600"
		tooltip="Закрыть окно"
	>
		<svg
			class="h-6 w-6"
			fill="none"
			stroke="black"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 18L18 6M6 6l12 12"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/>
		</svg>
	</MyButton>
</template>

<script lang="ts" setup>
import MyButton from '~/components/ui/button/myButton.vue';

const props = defineProps<{
	disabled: boolean;
	onClick: () => void;
}>();
</script>
