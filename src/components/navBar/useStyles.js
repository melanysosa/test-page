const useStyles = () => {
	return {
		containerNav:
			'flex justify-between items-start text-white top-0 md:p-12  py-3 px-4 header-nav headerNavMobile ',
		titleNav: ' flex w-1 cursor-pointer text-3xl',
		containerMenu: 'flex items-center',
		ulMenu: ' justify-end  hidden md:flex  text-white  text-lg',
		liMenu: 'mx-2 cursor-pointer',
		containerFaBars: 'md:hidden ',
		faBars: 'text-4xl',
		containerMenuMobile:
			'md:hidden  top-0 left-0 w-full h-screen  flex flex-col   navbar-mobileBg fixed py-0 px-4 ',
		containerTitleMobile: 'flex justify-between w-full py-5 mb-20',
		titleMenuMobile: ' flex w-1  cursor-pointer text-3xl',
		fix: 'text-4xl',
		itemMenuMobile: 'mb-6 cursor-pointer py-6 text-3xl',
	};
};

export default useStyles;
