import FooterComponent from "../../components/Footer";
import HeaderContainer from "../../components/Header";

export function MaxWidthLayout({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1800px] flex items-center ${className}`}>
      {children}
    </div>
  );
}

export default function MainLayout({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <div className="items-stretch bg-black flex flex-1 flex-col absolute left-0 top-0 w-screen min-h-0 min-w-screen overflow-x-hidden subpixel-antialiased">
      <HeaderContainer />
      {children}
      <FooterComponent />
    </div>
  );
}
