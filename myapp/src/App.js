// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------


import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App(props) {
  
  return (
    <ThemeProvider>
    <ScrollToTop />
    <StyledChart />
    <Router {...props}/> 
  </ThemeProvider>
  );
}

export default withAuthenticator(App);