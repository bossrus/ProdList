const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async <T>(endpoint: string): Promise<T> => {
	try {
		return await $fetch<T>(`${API_URL}/${endpoint}`, {
			method: 'GET',
		});
	} catch (error) {
		console.error(`Error fetching data from ${endpoint}:`, error);
		throw error;
	}
};

export const addPost = async (post: {
	title: string;
	body: string;
	userId: number;
}): Promise<void> => {
	try {
		await $fetch(`${API_URL}/posts`, {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
	} catch (error) {
		console.error('Error adding post:', error);
		throw error;
	}
};
