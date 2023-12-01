import styles from "@/src/utils/style";
import NavItems from "../Layout/NavItems";
import ProfileDropDown from '../ProfileDropDown';
const Header = () => {
  return (
    <header className="w-full h-[80px] bg-[#0F1524] flex items-center justify-between">
      <div className="w-[90%] m-auto h-[80px] flex items-center justify-between">
        <h1 className={`${styles.logo}`}>Codevey</h1>
        <NavItems />
        <ProfileDropDown />
      </div>
    </header>
  );
};

export default Header;
