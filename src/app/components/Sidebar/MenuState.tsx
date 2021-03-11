import { useSelector } from "react-redux";

function MenuState() {
  const { menuState } = useSelector((state: any) => ({
    menuState: state.menuState,
  }));
  return menuState;
}
export default MenuState;
