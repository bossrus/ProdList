<template>
	<div class="bg-gray-200 p-6 flex justify-between items-center">
		<div class="flex items-center space-x-2">
			<NavigateButtonFirst
				:disabled="currentPage <= 1"
				:onClick="() => goToPage(1)"
			/>
			<NavigateButtonPrev
				:disabled="currentPage <= 1"
				:onClick="() => goToPage(currentPage - 1)"
			/>
			<input
				v-model="inputPage"
				:max="pageCount"
				class="border rounded px-2 py-1 w-16 text-center"
				placeholder="Стр."
				type="number"
				@change="goToPage(inputPage)"
			/>
			/ {{ pageCount }}
			<NavigateButtonNext
				:disabled="currentPage >= pageCount"
				:onClick="() => goToPage(currentPage + 1)"
			/>
			<NavigateButtonLast
				:disabled="currentPage >= pageCount"
				:onClick="() => goToPage(pageCount)"
			/>
		</div>

		<AddPostButton
			:disabled="false"
			:onClick="() => store.setShowModal(0)"
		/>
	</div>
</template>

<script lang="ts" setup>
import NavigateButtonNext from '~/components/ui/button/button.navigate.next.vue';
import NavigateButtonFirst from '~/components/ui/button/button.navigate.first.vue';
import NavigateButtonLast from '~/components/ui/button/button.navigate.last.vue';
import NavigateButtonPrev from '~/components/ui/button/button.navigate.prev.vue';
import AddPostButton from '~/components/ui/button/button.addPost.vue';

import { useMainStore } from '~/store/main';

const store = useMainStore();
const pageCount = computed(() => store.pageCount);
const currentPage = computed(() => store.pageNumber);
const inputPage = ref(currentPage.value);

const goToPage = async (page: number) => {
	if (page < 1) page = 1;
	if (page > store.pageCount) page = store.pageCount;
	await store.fetchPosts();
	store.setPageNumber(page);
	inputPage.value = page;
};
</script>
