import { Nav } from './nav'

export function NavContent() {
  return (
    <section className="flex flex-col gap-5">
      <Nav href="/" type="Historic" />
      <Nav href="/" type="Store" />
      <Nav href="/" type="Ranking" />
      <Nav href="/" type="Users" />
      <Nav href="/" type="Report" />
    </section>
  )
}
