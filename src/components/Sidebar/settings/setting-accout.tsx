import { LogOut, Settings } from 'lucide-react'

const SettingOptions = {
  Config: {
    title: 'Configuraçoes',
    icon: <Settings color="#fff" />,
  },
  Logout: {
    title: 'Sair',
    icon: <LogOut color="#fff" />,
  },
} as const
interface SettingAccountProps {
  type: keyof typeof SettingOptions
}
export function SettingAcount({ type }: SettingAccountProps) {
  const SettingSelected = SettingOptions[type]
  return (
    <div className="flex items-center gap-5  hover:bg-mint-300 transition-all duration-200 flex-1 cursor-pointer w-full   px-5  ">
      {SettingSelected.icon}
      <h1 className="text-2xl text-white">{SettingSelected.title}</h1>
    </div>
  )
}
