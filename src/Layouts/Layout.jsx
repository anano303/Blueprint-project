import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
