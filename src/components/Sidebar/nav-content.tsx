import { Nav } from './nav'

export function NavContent() {
  return (
    <section className="flex flex-col gap-5">
      <Nav href="/dashboard/history" type="Historic" />
      <Nav href="/dashboard/store" type="Store" />
      <Nav href="/dashboard/ranking" type="Ranking" />
      <Nav href="/dashboard/users" type="Users" />
      <Nav href="/dashboard/report" type="Report" />
    </section>
  )
}
