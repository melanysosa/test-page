const url = "https://api.nuxtjs.dev/mountains";
export const getApi = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
	return data;
    
};

