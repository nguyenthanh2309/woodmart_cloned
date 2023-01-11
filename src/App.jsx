import { ThemeProvider, CssBaseline } from "@mui/material";

import {
  NavBar,
  Slideshow,
  Category,
  Products,
  Testimonial,
  CTA,
  PopularProducts,
  Articles,
  InstagramPosts,
  Footer
} from "./components";

import theme from "./theme";

import "@splidejs/react-splide/css";
import "react-tabs/style/react-tabs.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./reactTabCustom.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <CssBaseline />
        <NavBar />
        <Slideshow />
        <Category />
        <Products />
        <Testimonial />
        <CTA />
        <PopularProducts />
        <Articles />
        <InstagramPosts />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
