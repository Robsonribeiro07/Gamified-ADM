import { SettingAcount } from './setting-accout'

export function SettingContent() {
  return (
    <div className="flex-col w-full  h-[20%] flex items-start  bg-blue-500 rounded-lg gap-3 overflow-hidden  ">
      <SettingAcount type="Config" />
      <SettingAcount type="Logout" />
    </div>
  )
}
