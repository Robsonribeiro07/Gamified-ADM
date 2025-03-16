'use client'
import {
  ChartNoAxesColumn,
  History,
  ShoppingCart,
  Trophy,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  Historic: {
    title: 'Historico',
    icon: <History color="#fff706" size={35} />,
  },
  Store: {
    title: 'Loja',
    icon: <ShoppingCart color="#fff706" size={35} />,
  },
  Ranking: {
    title: 'Ranking',
    icon: <Trophy color="#fff706" size={35} />,
  },
  Users: {
    title: 'Usuarios',
    icon: <User color="#fff706" size={35} />,
  },
  Report: {
    title: 'Relatorio',
    icon: <ChartNoAxesColumn color="#fff706" size={35} />,
  },
} as const

interface NavProps {
  href: string
  type: keyof typeof navItems
}
export function Nav({ href, type }: NavProps) {
  const typeSelect = navItems[type]

  const pathname = usePathname()

  const isPageFocus = href === pathname ? 'bg-mint-300' : 'bg-blue-500'
  return (
    <Link
      className={`w-full  h-[15%] flex items-center justify-start px-5 rounded-lg hover:bg-mint-300 transition-all duration-200 ${isPageFocus}  `}
      href={href}
    >
      {typeSelect.icon}

      <h1 className="text-2xl text-white">{typeSelect.title}</h1>
    </Link>
  )
}
