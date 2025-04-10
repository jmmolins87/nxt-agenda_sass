




import { TestimonialCard } from "@/components/Testimonial-card"


export function TestimonialsSection() {
  return (
    <section id="opiniones" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mx-auto space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Opiniones
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Miles de profesionales y empresas confían en nuestra plataforma para gestionar su tiempo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="AgendaPro ha transformado la forma en que gestiono mis citas. Ahora puedo dedicar más tiempo a mis clientes y menos a la administración."
            author="María Rodríguez"
            role="Psicóloga"
            rating={5}
          />
          <TestimonialCard
            quote="Desde que implementamos esta plataforma en nuestra clínica, hemos reducido las cancelaciones en un 40% y aumentado la satisfacción de nuestros pacientes."
            author="Carlos Martínez"
            role="Director de Clínica Dental"
            rating={5}
          />
          <TestimonialCard
            quote="La facilidad de uso y las funciones de recordatorio automático han hecho que nuestro estudio sea mucho más eficiente. Totalmente recomendable."
            author="Laura Sánchez"
            role="Estudio de Yoga"
            rating={4}
          />
        </div>
      </div>
    </section>
  )
}
