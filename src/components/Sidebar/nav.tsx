import {
  ChartNoAxesColumn,
  History,
  ShoppingCart,
  Trophy,
  User,
} from 'lucide-react'
import Link from 'next/link'

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
  return (
    <Link
      className="w-full  h-[10%] flex items-center justify-start px-5 bg-blue-500 rounded-lg gap-3 hover:bg-mint-300 transition-all duration-200  "
      href={href}
    >
      {typeSelect.icon}

      <h1 className="text-2xl text-white">{typeSelect.title}</h1>
    </Link>
  )
}
