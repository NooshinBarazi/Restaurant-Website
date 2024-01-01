import { useAppSelector } from "@/redux/store"
import MenuList from "./MenuList"
import { MenuCard } from "./categoryList/MenuCard"

export const Header = () => {
    const {categories} = useAppSelector(state => state.foods)

  return (
    <div style={{backgroundColor: '#fff', position: 'sticky'}}>
        <MenuList />
        <MenuCard categories={categories} />
    </div>
  )
}
