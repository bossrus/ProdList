<template>
	<MyModal>
		<template #id>новый пост</template>
		<div class="flex-col gap-2 px-5 pb-3 justify-start w-full">
			<div class="title">Автор:</div>
			<div class="text">
				<select
					v-model="inputAuthor"
					class="w-full p-2 border border-gray-300 rounded-md"
				>
					<option
						v-for="user in store.users"
						:key="user.id"
						:value="user.id"
					>
						{{ user.name }}
					</option>
				</select>
			</div>

			<div class="title">Тема:</div>
			<div class="text">
				<input
					v-model="inputTitle"
					class="w-full p-2 border border-gray-300 rounded-md"
					type="text"
				/>
			</div>

			<div class="title">Содержимое:</div>
			<div class="text">
				<textarea
					v-model="inputText"
					class="w-full p-2 border border-gray-300 rounded-md"
					rows="5"
				></textarea>
			</div>

			<div class="flex justify-end mt-5">
				<ButtonOk :disabled="!isFormValid" :on-click="savePost" />
			</div>
		</div>
	</MyModal>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';
import MyModal from '~/components/ui/modal/myModal.vue';
import ButtonOk from '~/components/ui/button/button.ok.vue';

const store = useMainStore();

const savePost = () => {
	if (!isFormValid) return;
	store.createPost({
		userId: inputAuthor.value!,
		title: inputTitle.value,
		body: inputText.value,
	});
	store.setShowModal(undefined);
};

const inputAuthor = ref<undefined | number>(undefined);
const inputTitle = ref('');
const inputText = ref('');

const isFormValid = computed(() => {
	return (
		inputAuthor.value !== undefined &&
		inputTitle.value.trim() !== '' &&
		inputText.value.trim() !== ''
	);
});
</script>

<style scoped>
.title {
	@apply text-lg mt-5;
}

.text {
	@apply font-bold mt-2;
}
</style>
