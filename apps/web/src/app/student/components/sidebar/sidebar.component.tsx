'use client';
import { NavigationMenu, NavigationMenuList } from '@/common/components/ui/navigation-menu';
import { CalendarIcon, ChatBubbleIcon, DrawingPinIcon, HomeIcon, Pencil2Icon, PersonIcon } from '@radix-ui/react-icons';
import { NavItem } from '../nav-item';

export function Sidebar() {
  return (
    <NavigationMenu orientation="vertical" className="items-start justify-start">
      <NavigationMenuList className="flex-col items-center justify-start space-x-0 gap-[0.1rem] py-3 min-w-48">
        <NavItem href="/student">
          <HomeIcon width={18} height={18} />
          Inicio
        </NavItem>
        <NavItem href="/student/tasks">
          <Pencil2Icon width={18} height={18} />
          Atividades
        </NavItem>
        <NavItem href="/student/releases">
          <DrawingPinIcon width={18} height={18} />
          Comunicados
        </NavItem>
        <NavItem href="/student/events">
          <CalendarIcon width={18} height={18} />
          Eventos
        </NavItem>
        <NavItem href="/student/chats">
          <ChatBubbleIcon width={18} height={18} />
          Conversas
        </NavItem>
        <NavItem href="/perfil">
          <PersonIcon width={18} height={18} />
          Perfil
        </NavItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
