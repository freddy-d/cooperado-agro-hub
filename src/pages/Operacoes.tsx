import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function Operacoes() {
  usePageSEO({
    title: "Operações | Cooperado Agro Hub",
    description: "Agendamentos e Romaneios para reduzir filas e formalizar entregas.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Operações</h1>
        <p className="text-sm text-muted-foreground">Agendamentos & Romaneios</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">Em breve: listagens de agendamentos e romaneios com ações rápidas.</p>
      </section>
    </Layout>
  )
}
