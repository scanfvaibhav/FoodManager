// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import FoodManager from './containers/FoodManager'

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <FoodManager />
      {/* <ScrollToTop />
      <StyledChart />
      <Router /> */}
    </ThemeProvider>
  );
}
