import { routes } from "@/config/routes";
import { FileText, LayoutDashboard } from "lucide-react";
import React, { type ReactNode } from "react";
import { Link, useLocation } from "react-router";

import { cn } from "@/lib/utils";
import { UserDropdown } from "./user-dropdown";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export interface DashboardLayoutProps {
  children?: ReactNode;
}

const menuItems = [
  {
    title: "Dashboard",
    href: routes.index,
    icon: LayoutDashboard,
  },
  {
    title: "Documentations",
    href: routes.apiDocs,
    icon: FileText,
  },
];

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r-0 bg-primary">
        <SidebarHeader className="h-16 p-0">
          <div
            className={cn(
              "flex h-16 items-center px-4 bg-primary",
              "group-data-[collapsible=icon]:justify-center",
              "group-data-[collapsible=icon]:px-2",
            )}
          >
            <Link to={routes.index} className="flex min-w-0 items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 font-bold text-white ring-1 ring-white/10">
                P
              </div>

              <div className="min-w-0 group-data-[collapsible=icon]:hidden">
                <div className="truncate text-sm font-semibold tracking-tight text-white">
                  Paneli
                </div>

                <div className="truncate text-xs text-white/50">
                  Admin Dashboard
                </div>
              </div>
            </Link>
          </div>
        </SidebarHeader>

        <SidebarContent className={cn("px-3 py-6", "bg-primary")}>
          <div
            className={cn(
              "mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider",
              "text-white/40",
              "group-data-[collapsible=icon]:hidden",
            )}
          >
            Workspace
          </div>

          <SidebarMenu>
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                location.pathname === item.href ||
                location.pathname.startsWith(`${item.href}/`);

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={<Link to={item.href} />}
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      "h-10 px-3",
                      isActive
                        ? "text-primary! border-l-4 border-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-5! shrink-0",
                        isActive
                          ? "text-primary"
                          : "text-white/60 group-hover:text-white",
                      )}
                      strokeWidth={1.8}
                    />

                    <span className="truncate">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center border-b bg-background px-6">
          <SidebarTrigger className="-ml-2 mr-3" />
          <div>
            <h1 className="tracking-tight">
              Welcome back, <strong>Usman</strong>
            </h1>

            <p className="text-xs text-muted-foreground">
              Here's what's happening today.
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <UserDropdown />
          </div>
        </header>

        <main className="flex-1 bg-muted p-6">
          <div className="mx-auto w-full max-w-[1600px]">{children}</div>
        </main>

        <footer className="border-t bg-background px-6 py-4">
          <div className="mx-auto text-center text-xs text-muted-foreground">
            © {currentYear} Paneli. All rights reserved.
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
};
