import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Job from './Components/Job/Job';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/job" element={<Job />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

