import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from 'styled-components'
import { theme } from './utils/themes';
import Home from './pages/Home';
import { useThemeMode } from './hooks/useThemeMode';


function App() {
    const [themeMode, toggleTheme] = useThemeMode()

    const appTheme = themeMode === 'light' ? theme.colors.light : theme.colors.dark
  return (
    <ThemeProvider theme={appTheme}>
    <Routes>
      <Route element={<Home/>} path='/' />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
