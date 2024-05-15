'use client';
import { NavigationMenu, NavigationMenuList } from '@/common/components/ui/navigation-menu';
import {
  BackpackIcon,
  CalendarIcon,
  Cross1Icon,
  DashboardIcon,
  DrawingPinIcon,
  FaceIcon,
  HomeIcon,
  IdCardIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { NavItem } from '@/common/components/nav-item';

type SidebarProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export function Sidebar({ open = false, setOpen }: SidebarProps) {
  return (
    <>
      <NavigationMenu
        orientation="vertical"
        className={`absolute ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 left-0 top-0 bg-background rounded-md md:relative items-start justify-start h-full z-20 transition-transform shadow-xl`}
      >
        <NavigationMenuList className="flex-col items-center justify-start space-x-0 gap-[0.1rem] py-3 min-w-48">
          <div
            className="flex justify-end items-center w-full md:hidden p-4 cursor-pointer"
            onClick={() => setOpen && setOpen(false)}
          >
            <Cross1Icon />
          </div>
          <NavItem href="/organization">
            <HomeIcon width={18} height={18} />
            Inicio
          </NavItem>
          <NavItem href="/organization/releases">
            <DrawingPinIcon width={18} height={18} />
            Comunicados
          </NavItem>
          <NavItem href="/organization/events">
            <CalendarIcon width={18} height={18} />
            Eventos
          </NavItem>
          <NavItem href="/perfil">
            <PersonIcon width={18} height={18} />
            Perfil
          </NavItem>
          <h2 className="text-sm text-muted-foreground mt-6 mb-3">Administrador</h2>
          <NavItem href="/organization/grids">
            <DashboardIcon width={18} height={18} />
            Grades
          </NavItem>
          <NavItem href="/organization/teachers">
            <BackpackIcon width={18} height={18} />
            Professores
          </NavItem>
          <NavItem href="/organization/students">
            <IdCardIcon width={18} height={18} />
            Alunos
          </NavItem>
        </NavigationMenuList>
      </NavigationMenu>
      {open && (
        <div
          className="w-[100vw] h-[100vh] absolute top-0 left-0 z-10 md:hidden"
          onClick={() => setOpen && setOpen(false)}
        />
      )}
    </>
  );
}
