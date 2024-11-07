import { FC, PropsWithChildren } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
