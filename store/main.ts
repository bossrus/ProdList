import { defineStore } from 'pinia';
import type { IPost } from '~/interfaces/post.interface';
import type { IUser } from '~/interfaces/user.interface';
import { addPost, fetchData } from '~/services/api.service';

interface IMainState {
	posts: IPost[];
	users: IUser[];
	isLoading: boolean;
	sortField: keyof IPost;
	sortDirection: 'asc' | 'desc';
	pageNumber: number;
	showModal?: number;
	sentSuccess: boolean;
}

export const useMainStore = defineStore('main', {
	state: (): IMainState => ({
		posts: [],
		users: [],
		isLoading: false,
		sortField: 'id' as keyof IPost,
		sortDirection: 'asc' as 'asc' | 'desc',
		pageNumber: 1,
		showModal: undefined,
		sentSuccess: false,
	}),
	getters: {
		sortedPosts: (state) => {
			const sortedPosts = [...state.posts]
				.map((post) => ({
					...post,
					userId:
						state.users.find((user) => user.id === post.userId)
							?.name || post.userId,
				}))
				.sort((a, b) => {
					if (a[state.sortField] < b[state.sortField])
						return state.sortDirection === 'asc' ? -1 : 1;
					if (a[state.sortField] > b[state.sortField])
						return state.sortDirection === 'asc' ? 1 : -1;
					return 0;
				});

			const startIndex = (state.pageNumber - 1) * 10;
			const endIndex = startIndex + 10;
			return sortedPosts.slice(startIndex, endIndex);
		},
		pageCount: (state) => {
			return Math.ceil(state.posts.length / 10);
		},
	},
	actions: {
		setSortDirection(sortBy: keyof IPost) {
			if (sortBy === this.sortField) {
				this.sortDirection =
					this.sortDirection === 'asc' ? 'desc' : 'asc';
			} else {
				this.sortField = sortBy;
				this.sortDirection = 'asc';
			}
		},

		setPageNumber(pageNumber: number) {
			this.pageNumber = pageNumber;
		},

		setShowModal(id: number | undefined) {
			this.showModal = id;
		},

		setSentSuccess(sentSuccess: boolean) {
			this.sentSuccess = sentSuccess;
		},

		setLoading(isLoading: boolean) {
			this.isLoading = isLoading;
		},

		getUserById(id: number | string | undefined): IUser | undefined {
			return this.users.find((user) => user.id === id);
		},

		getPostById(id: number | string): IPost | undefined {
			return this.posts.find((post) => post.id === id);
		},

		async fetchPosts(): Promise<void> {
			this.setLoading(true);
			try {
				this.posts = await fetchData<IPost[]>('posts');
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				this.setLoading(false);
			}
		},

		async createPost(post: {
			title: string;
			body: string;
			userId: number;
		}) {
			try {
				await addPost(post);
				// я бы добавил пост в стор, но в этом нет смысла, ибо при пагинации содержимое стора обновляется
			} catch (error) {
				console.error('Ошибка при добавлении поста:', error);
			}
			this.setSentSuccess(true);
		},

		async fetchUsers(): Promise<void> {
			this.setLoading(true);
			try {
				this.users = await fetchData<IUser[]>('users');
			} catch (error) {
				console.error('Error fetching users:', error);
			} finally {
				this.setLoading(false);
			}
		},
	},
});
