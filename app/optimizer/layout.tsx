// /app/optimizer/layout.tsx
export default function OptimizerLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="contaner min-w-screen max-h-screen mx-auto">{children}</div>
    </main>
  )
}
