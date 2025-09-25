import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Camera,
  Heart,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Settings,
  ShoppingBag,
  Stethoscope,
  Users,
  User,
  GraduationCap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Contact", url: "/contact", icon: Phone },
];

const petItems = [
  { title: "Bella (Dog)", url: "/pets/bella", icon: PawPrint },
  { title: "Whiskers (Cat)", url: "/pets/whiskers", icon: PawPrint },
  { title: "Snowball (Rabbit)", url: "/pets/snowball", icon: PawPrint },
];

const servicesItems = [
  { title: "Health Records", url: "/health", icon: Stethoscope },
  { title: "Grooming", url: "/grooming", icon: Heart },
  { title: "Training", url: "/training", icon: GraduationCap },
  { title: "Pet Photos", url: "/gallery", icon: Camera },
  { title: "Veterinarians", url: "/vets", icon: MapPin },
  { title: "Pet Supplies", url: "/supplies", icon: ShoppingBag },
  { title: "Community", url: "/community", icon: Users },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My Pets</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {petItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {servicesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}