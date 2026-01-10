import PageFlip from "@/components/common/PageFlip";
import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { PropsWithChildren } from "react";

const LayoutComponents = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
      <PageFlip />
    </div>
  );
};

export default LayoutComponents;
