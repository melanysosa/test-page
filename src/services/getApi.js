const url = 'https://api.nuxtjs.dev/mountains?limit=3';
export const getApi = async () => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};
