const theme = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("localStorage.theme: ", localStorage.theme)

  if (!('theme' in localStorage) || localStorage.theme === 'system' ) {
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
    localStorage.setItem('theme', 'system')
  } else if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
};

theme();
