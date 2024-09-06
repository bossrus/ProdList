<template>
	<div class="fixed inset-0 flex justify-center z-50">
		<div class="absolute inset-0 bg-black opacity-60"></div>
		<div
			class="bg-white w-[400px] h-max rounded-lg mt-32 shadow-2xl z-10 flex flex-col"
		>
			<div
				class="bg-gray-200 p-1 rounded-t-lg flex justify-between items-center"
			>
				<div class="pl-3 font-medium">
					<slot name="id"></slot>
				</div>
				<ButtonClose :disabled="false" :on-click="closeModal" />
			</div>

			<div class="p-4">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';
import ButtonClose from '~/components/ui/button/button.close.vue';

const store = useMainStore();
const closeModal = () => {
	store.setShowModal(undefined);
};
</script>
