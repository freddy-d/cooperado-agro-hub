import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function Fiscal() {
  usePageSEO({
    title: "Fiscal & Financeiro | Cooperado Agro Hub",
    description: "Inbox fiscal, emissão básica e cobranças Pix/Boletos.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Fiscal & Financeiro</h1>
        <p className="text-sm text-muted-foreground">XML, Emissão, Cobranças e Conciliação</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">Área fiscal e financeira será disponibilizada aqui.</p>
      </section>
    </Layout>
  )
}
