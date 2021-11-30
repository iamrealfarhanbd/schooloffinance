import Head from "next/head";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="School of Finance offers high-quality finance courses teaming
                with professional finance and accounting experts. We are here to
                ensure that you get the best quality course materials and
                experience the smoothest e-Learning journey ever."
        />
        <meta
          name="keywords"
          content="school, finance, tax, accounting, elearning, learn finance, learn tax, learn accounting"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/favicon.png"
        />
        <title>School of Finance</title>
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/css/themify-icons.css" rel="stylesheet" />
        <link href="/assets/css/flaticon-set.css" rel="stylesheet" />
        <link href="/assets/css/elegant-icons.css" rel="stylesheet" />
        <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
        <link href="/assets/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/bootsnav.css" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
        <script src="/assets/js/jquery-3.6.0.min.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/jquery.appear.js"></script>
        <script src="/assets/js/jquery.easing.min.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/modernizr.custom.13711.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/progress-bar.min.js"></script>
        <script src="/assets/js/isotope.pkgd.min.js"></script>
        <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/js/count-to.js"></script>
        <script src="/assets/js/YTPlayer.min.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/loopcounter.js"></script>
        <script src="/assets/js/bootsnav.js"></script>
        <script src="/assets/js/main.js"></script>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
