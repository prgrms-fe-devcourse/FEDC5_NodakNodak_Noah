import DarkIcon from '@/assets/DarkIcon';
import LightIcon from '@/assets/LightIcon';
import theme from '@/styles/theme';

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    const isDarkMode = localStorage.getItem('isDark') === 'true';
    localStorage.setItem('isDark', (!isDarkMode).toString());
    window.location.reload();
  };

  return (
    <div onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
      {theme.isDark ? <LightIcon /> : <DarkIcon />}
    </div>
  );
};

export default DarkModeToggle;
