<template>
	<div class="fixed top-0 left-0 w-full flex justify-center p-4">
		<div
			:class="`text-black p-4 font-bold rounded-3xl shadow-lg ${props.color}`"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useMainStore } from '~/store/main';

const props = defineProps<{
	color: string;
}>();

const store = useMainStore();

onMounted(() => {
	if (store.sentSuccess) {
		setTimeout(() => {
			store.setSentSuccess(false);
		}, 3000);
	}
});
</script>
