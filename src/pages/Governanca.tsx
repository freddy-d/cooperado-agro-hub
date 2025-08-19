import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function Governanca() {
  usePageSEO({
    title: "Governança | Cooperado Agro Hub",
    description: "Assembleias, votos e assistência técnica.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Governança</h1>
        <p className="text-sm text-muted-foreground">Assembleias & Suporte</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">Em breve: assembleias, votação e suporte técnico.</p>
      </section>
    </Layout>
  )
}
