import {Link} from 'react-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavBar(){
 return (
  <NavigationMenu>
    <NavigationMenuList className="w-screen">

      <NavigationMenuItem >
        <NavigationMenuLink>  <Link to='/'>Home</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/aboutme'>About Me</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/projects'>Projects</Link>  </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
 )
}

export default NavBar