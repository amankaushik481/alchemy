import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  Tokens,
} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Tokens />
    <Transactions />
    <Footer />
  </div>
);

export default App;
