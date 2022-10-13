const url = 'https://api.nuxtjs.dev/mountains';
export const getApi = async () => {
  const res = await fetch(url);
  const resMontains = await res.json();
	return resMontains;
};
