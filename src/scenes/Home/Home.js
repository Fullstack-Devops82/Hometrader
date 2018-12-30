import React from 'react';
// import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Search from './sections/Search/Search';
import Support from './sections/Support/Support';
import Special from './sections/Special/Special';
import Guide from './sections/Guide/Guide';
import Consult from './sections/Consult/Consult';
import Review from './sections/Review/Review';
import DownloadApp from './sections/DownloadApp/DownloadApp';
import ServiceHelp from './sections/ServiceHelp/ServiceHelp';
import Footer from './components/Footer/Footer';

const Home = props => (
  <React.Fragment>
    {/* <Menu /> */}
    <Header />
    <div className="homecontainer">
      <Search />
      <Support />
      <Special />
      <Guide />
      <Consult />
      <Review />
      <DownloadApp />
      <ServiceHelp />
      <Footer />
    </div>
  </React.Fragment>
);

export default Home;
