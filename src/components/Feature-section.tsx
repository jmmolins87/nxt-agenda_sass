



import { 
    Calendar, 
    Clock, 
    Users, 
    BarChart, 
    MessageSquare, 
    Phone 
} from "lucide-react"
import { FeatureCard } from "@/components/Feature-card"

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Todo lo que necesitas para gestionar tu tiempo
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra plataforma está diseñada para facilitar la gestión de tu agenda, citas y recordatorios.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Calendar className="h-10 w-10 text-primary" />}
            title="Agenda Inteligente"
            description="Organiza tus citas y eventos con nuestra interfaz intuitiva y fácil de usar."
          />
          <FeatureCard
            icon={<Clock className="h-10 w-10 text-primary" />}
            title="Recordatorios Automáticos"
            description="Recibe notificaciones y recordatorios para nunca olvidar una cita importante."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-primary" />}
            title="Gestión de Clientes"
            description="Mantén una base de datos organizada con toda la información de tus clientes."
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10 text-primary" />}
            title="Estadísticas Detalladas"
            description="Analiza tu rendimiento y productividad con informes personalizados."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-primary" />}
            title="Comunicación Integrada"
            description="Envía mensajes y notificaciones directamente desde la plataforma."
          />
          <FeatureCard
            icon={<Phone className="h-10 w-10 text-primary" />}
            title="Acceso Móvil"
            description="Accede a tu agenda desde cualquier dispositivo, en cualquier momento y lugar."
          />
        </div>
      </div>
    </section>
  )
}
