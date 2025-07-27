import { useAuth } from '@/contexts/AuthContext';
import { useLocation, NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  FileText, 
  Settings,
  Building2,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const menuItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard, roles: ['clientadmin', 'entityadmin', 'entityuser'] },
  { title: 'Master', url: '/master', icon: Building2, roles: ['clientadmin'] },
  { title: 'Revenue', url: '/revenue', icon: TrendingUp, roles: ['clientadmin', 'entityadmin', 'entityuser'] },
  { title: 'Daily Analytics', url: '/daily-analytics', icon: BarChart3, roles: ['clientadmin', 'entityadmin', 'entityuser'] },
  { title: 'Reports', url: '/reports', icon: FileText, roles: ['clientadmin', 'entityadmin', 'entityuser'] },
  { title: 'Payroll Management', url: '/payroll', icon: DollarSign, roles: ['clientadmin'] },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user } = useAuth();
  const location = useLocation();

  const filteredItems = menuItems.filter(item => 
    user?.role && item.roles.includes(user.role)
  );

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent hover:text-accent-foreground"
                      }
                    >
                      <item.icon className="h-4 w-4" />
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