import { Nav } from '@/components/Desktop/Sidebar/nav/nav'
import { SettingContent } from '@/components/Desktop/Sidebar/settings/setting-content'

export function NavContentMobile() {
  return (
    <div className="h-full md:flex flex-col justify-between">
      <section className="flex flex-col gap-5 h-full ">
        <Nav href="/dashboard/history" type="Historic" />
        <Nav href="/dashboard/store" type="Store" />
        <Nav href="/dashboard/ranking" type="Ranking" />
        <Nav href="/dashboard/users" type="Users" />
        <Nav href="/dashboard/report" type="Report" />
      </section>

      <SettingContent />
    </div>
  )
}
