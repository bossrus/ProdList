<template>
	<MyButton
		:disabled="props.disabled"
		:on-click="props.onClick"
		bg-color="bg-green-400"
		tooltip="Добавить пост"
	>
		<svg
			class="h-6 w-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4v16m8-8H4"
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
