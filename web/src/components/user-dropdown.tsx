import { LogOut, Settings, UserCog } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function UserDropdown() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  const items = [
    {
      href: "/settings/profile",
      icon: UserCog,
      label: "Profile Settings",
    },
    {
      href: "/settings/panel",
      icon: Settings,
      label: "Panel Settings",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar size="lg">
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href}
            render={
              <Link to={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            }
          />
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} variant="destructive">
          <LogOut />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
