import {
  BookOpen,
  LayoutGridIcon,
  LogOut,
  MessageCircleCode,
} from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
  {
    title: 'Environments',
    icon: LayoutGridIcon,
    path: '/environments',
  },
  {
    title: 'Documentation',
    icon: BookOpen,
    path: '/documentation',
  },
  {
    title: 'Help Forum',
    icon: MessageCircleCode,
    path: '/help-forum',
  },
]

const Header = () => {
  return (
    <div className="border-b border-gray-600 shadow-sm">
      <div className="container flex h-14 items-center justify-between py-2">
        <div className="flex items-center gap-x-10">
          <p className="text-3xl font-semibold">
            Bubble <span className="text-primary">Hub</span>
          </p>
          <nav className={`
            hidden items-center gap-x-8

            md:flex
          `}>
            {navItems.map((nav) => (
              <Link
                href={nav.path}
                key={nav.title}
                className="flex items-center gap-x-1"
              >
                <nav.icon size={18} />
                <p className="font-semibold">{nav.title}</p>
              </Link>
            ))}
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-x-2 border-none outline-none">
            <div
              className={`
                hidden flex-col justify-center text-right font-medium

                lg:flex
              `}
            >
              <p className="text-sm">Cao Dang Tinh</p>
              <p className="text-xs text-muted-foreground">@DangTinh04020107</p>
            </div>
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-40" align="center">
            {navItems.map((nav) => (
              <DropdownMenuItem
                key={nav.title}
                className={`
                  flex items-center gap-x-2

                  md:hidden
                `}
              >
                <nav.icon size={18} />
                <p>{nav.title}</p>
              </DropdownMenuItem>
            ))}
            <DropdownMenuLabel className={`
              hidden

              md:block
            `}>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              <span>Logout</span>
              <LogOut size={14} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
