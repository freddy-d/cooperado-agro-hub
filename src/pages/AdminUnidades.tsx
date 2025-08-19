import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function AdminUnidades() {
  usePageSEO({
    title: "Admin • Unidades | Cooperado Agro Hub",
    description: "Cadastro e gestão de unidades do tenant.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Administração • Unidades</h1>
        <p className="text-sm text-muted-foreground">Configuração das unidades</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">Em breve: cadastro e edição de unidades.</p>
      </section>
    </Layout>
  )
}
