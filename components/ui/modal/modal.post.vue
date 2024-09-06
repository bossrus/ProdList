<template>
	<MyModal v-if="post !== undefined && author !== undefined">
		<template #id> ID поста: {{ post.id }}</template>

		<div class="flex-col gap-2 px-5 pb-8">
			<div class="title">Автор:</div>
			<div class="text">
				{{ author.name }}
				<span class="font-light">(ID: {{ author.id }})</span>
			</div>

			<div class="title">Тема:</div>
			<div class="text">
				{{ post.title }}
			</div>

			<div class="title">Содержимое:</div>
			<div class="text">
				{{ post.body }}
			</div>
		</div>
	</MyModal>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useMainStore } from '~/store/main';
import MyModal from '~/components/ui/modal/myModal.vue';

const store = useMainStore();

const post = computed(() => {
	return store.getPostById(store.showModal!);
});

const author = computed(() => {
	return store.getUserById(post.value?.userId);
});
</script>

<style scoped>
.title {
	@apply text-lg mt-5;
}

.text {
	@apply font-bold ml-9;
}
</style>
