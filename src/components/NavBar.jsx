import {Link} from 'react-router'
import {Button} from './ui/button'
import { SunMoon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    <NavigationMenuList className="flex w-screen px-10 font-semibold">
      
      <Avatar className="h-10 w-10">
        <AvatarImage src="/CTD.png"/>
        <AvatarFallback>CTD</AvatarFallback>
      </Avatar>

      <NavigationMenuItem >
        <NavigationMenuLink>  <Link to='/'>Home</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/aboutme'>About</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/projects'>Projects</Link>  </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>  <Link to='/'>Contact</Link>  </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className="ml-auto">
        <Button className="bg-gray-200 text-black hover:bg-gray-700 hover:text-white">Resume</Button>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
 )
}

export default NavBar