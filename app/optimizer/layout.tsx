const Layout = ({ children }: { children : React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
        <div className="container py-10">
        {children}
        </div>
    </main>
  )
}

export default Layout
