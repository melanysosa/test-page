
const useStyles = () => {
  return {
		containerFooter:
			'footer-page h-0  text-white flex flex-col md:flex-row p-12 sm:justify-between ',
		containerFooterContact: 'flex flex-col items-center md:items-start',
		titleFooter: 'flex w-32 md:w-1 py-4 text-xl',
		containerTerms: 'flex flex-col justify-end',
		containerUlTerms:
			'flex items-center md:flex-row flex-col justify-end mb-6 pl-8 md:px-0',
		liTerms: 'mx-2 ',
		spanTerms: ' md:visible invisible pl-2',
		copyRightFooter:
			' flex pl-10 items-center sm:flex-row flex-col justify-end text-xs py-2 pr-6',
  };
}

export default useStyles