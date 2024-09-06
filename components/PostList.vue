<template>
	<div class="w-full p-7 h-full relative">
		<h2 class="text-2xl font-bold mb-4">Список постов</h2>
		<table class="w-full rounded-xl overflow-hidden">
			<thead class="bg-gray-100">
				<tr class="text-xs">
					<th
						:class="
							sortField === 'id'
								? 'font-extrabold'
								: 'font-semibold'
						"
						class="w-[7%] bs-th"
						@click="setSortField('id')"
					>
						ID
						<span v-if="sortField === 'id'">
							{{ sortDirection === 'asc' ? '↑' : '↓' }}
						</span>
					</th>
					<th
						:class="
							sortField === 'userId'
								? 'font-extrabold'
								: 'font-semibold'
						"
						class="w-[20%] bs-th"
						@click="setSortField('userId')"
					>
						Автор
						<span v-if="sortField === 'userId'">
							{{ sortDirection === 'asc' ? '↑' : '↓' }}
						</span>
					</th>
					<th
						:class="
							sortField === 'title'
								? 'font-extrabold'
								: 'font-semibold'
						"
						class="w-[30%] bs-th"
						@click="setSortField('title')"
					>
						Заголовок
						<span v-if="sortField === 'title'">
							{{ sortDirection === 'asc' ? '↑' : '↓' }}
						</span>
					</th>
					<th
						:class="
							sortField === 'body'
								? 'font-extrabold'
								: 'font-semibold'
						"
						class="w-[40%] bs-th"
						@click="setSortField('body')"
					>
						Текст
						<span v-if="sortField === 'body'">
							{{ sortDirection === 'asc' ? '↑' : '↓' }}
						</span>
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				<tr
					v-for="post in sortedPosts"
					:key="post.id"
					class="hover:bg-gray-50 cursor-pointer"
					@click="store.setShowModal(post.id)"
				>
					<td class="bs-td">
						{{ post.id }}
					</td>
					<td class="bs-td">
						{{ post.userId }}
					</td>
					<td class="bs-td">
						{{ post.title }}
					</td>
					<td class="bs-td">
						{{ post.body }}
					</td>
				</tr>
			</tbody>
		</table>
		<Throbber v-if="store.isLoading" />
	</div>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main';
import type { IPost } from '~/interfaces/post.interface';
import Throbber from '~/components/Throbber.vue';

const store = useMainStore();
const sortedPosts = computed(() => store.sortedPosts);

const sortField = computed(() => store.sortField);
const sortDirection = computed(() => store.sortDirection);

const setSortField = async (field: keyof IPost) => {
	await store.fetchPosts();
	store.setSortDirection(field);
};
</script>

<style scoped>
.bs-th {
	@apply px-4 py-2 text-left  text-gray-600 uppercase tracking-wider cursor-pointer;
}

.bs-td {
	@apply px-4 py-2 whitespace-nowrap truncate max-w-0.5;
}
</style>
