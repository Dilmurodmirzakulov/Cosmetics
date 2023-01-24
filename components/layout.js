
import CategoryNav from './CategoryNav'
import Footer from './Footer'
import MainNav from './MainNav'

export default function Layout({ children }) {
  return (
    <>
      <MainNav />
      <CategoryNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}