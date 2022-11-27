import InfoHeader from "./info";
import MainHeader from "./MainHeader";

const Header = () => {
  return (
    <header className="dark:bg-secondary bg-[#ccc]">
      <InfoHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
