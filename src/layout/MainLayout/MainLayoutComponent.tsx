import FooterComponent from "../../components/Footer";
import HeaderContainer from "../../components/Header";

export function MainLayoutComponent({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <div className="bg-black left-0 top-0 min-h-0 min-w-screen absolute flex w-screen flex-1 flex-col items-stretch overflow-x-hidden subpixel-antialiased">
      <HeaderContainer />
      {children}
      <FooterComponent />
    </div>
  );
}
