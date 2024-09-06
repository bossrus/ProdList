<template>
	<div class="h-full flex justify-center m-12">
		<div
			class="w-full h-max bg-white shadow-2xl flex flex-col rounded-3xl overflow-hidden"
		>
			<div class="flex-grow overflow-auto">
				<PostList />
			</div>
			<Footer />
		</div>
		<transition name="fade">
			<ModalNewPost v-if="store.showModal == 0" />
		</transition>
		<transition name="fade">
			<ModalPost v-if="store.showModal" />
		</transition>

		<transition name="slide-down">
			<SuccessAlert v-if="store.sentSuccess" />
		</transition>
	</div>
</template>

<script lang="ts" setup>
import PostList from '~/components/PostList.vue';
import Footer from '~/components/Footer.vue';
import { useMainStore } from '~/store/main';
import ModalPost from '~/components/ui/modal/modal.post.vue';
import ModalNewPost from '~/components/ui/modal/modal.post.new.vue';
import SuccessAlert from '~/components/ui/alert/alert.sentSuccess.vue';
import { onMounted } from 'vue';

const store = useMainStore();

onMounted(() => {
	store.fetchUsers();
	store.fetchPosts();
});
</script>

<style>
body {
	background-color: #e9eef6;
}

button:disabled {
	background-color: gray;
	cursor: not-allowed;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: transform 0.5s;
}

.slide-down-enter-from,
.slide-down-leave-to {
	transform: translateY(-200%);
}
</style>
