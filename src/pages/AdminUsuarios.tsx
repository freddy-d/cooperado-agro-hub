import { Layout } from "@/components/Layout"
import { usePageSEO } from "@/hooks/usePageSEO"

export default function AdminUsuarios() {
  usePageSEO({
    title: "Admin • Usuários | Cooperado Agro Hub",
    description: "Gerencie usuários e permissões do sistema.",
    canonical: window.location.href,
  })

  return (
    <Layout>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Administração • Usuários</h1>
        <p className="text-sm text-muted-foreground">Controle de usuários e papéis</p>
      </header>
      <section className="rounded-lg border bg-card p-6 text-card-foreground">
        <p className="text-sm text-muted-foreground">Lista e ações de usuários serão exibidas aqui.</p>
      </section>
    </Layout>
  )
}
