const useStyles = () => {
	return {
		containerHome: 'grid grid-cols-1 m-5 md:p-8',
		containerPart1: 'grid  grid-cols-1 ',
		titleHome:
			'flex flex-col items-center md:flex-row justify-center text-xl font-bold  pb-6 py-4',
		spantitle: 'flex md:pl-2',
		infoHome1: 'font-semibold',
		containerCards: 'grid gap-5 md:grid-cols-3 mt-4 pb-6',
		cardHome: 'h-80 w-full sm:h-60 object-cover md:w-96 ',
		containerPart2: 'grid  grid-cols-1 md:grid-cols-2  ',
		containerInfoHome2: 'pr-7 pb-6 ',
		titleHome2: 'text-lg font-bold mb-4 text-solid',
		infoHome2: 'text-sm mb-2 font-semibold',
		cardHome2: 'h-64 md:h-96 object-cover w-full ',
	};
};

export default useStyles;
