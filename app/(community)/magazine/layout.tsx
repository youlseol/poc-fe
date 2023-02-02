
interface MagazineLayoutProps {
  children?: React.ReactNode
}

export default async function MagazineLayout({
  children,
}: MagazineLayoutProps) {
  return (
    <main className="flex-1">{children}</main>
  )
}
