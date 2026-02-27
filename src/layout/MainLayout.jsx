import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-brand-dark via-black to-brand-dark">
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <div className="page-container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
