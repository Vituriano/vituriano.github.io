// eslint-disable-next-line consistent-return
const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#fff';
  if (theme === 'dark') return '#0a040df5';
};


export default getThemeColor;
