import { SettingContent } from '../settings/setting-content'
import { Nav } from './nav'

export function NavContent() {
  return (
    <div className="h-full hidden  md:flex flex-col justify-between">
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
