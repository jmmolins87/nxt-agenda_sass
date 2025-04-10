





import { ServiceCard } from '@/components/Service-card';


export function ServicesSection() {
    return (
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Servicios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Soluciones adaptadas a tus necesidades
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Ofrecemos diferentes servicios para ayudarte a gestionar tu tiempo de manera eficiente.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 md:grid-cols-2">
                    <ServiceCard
                        title="Para Profesionales Independientes"
                        description="Ideal para consultores, terapeutas, entrenadores y cualquier profesional que necesite gestionar sus citas."
                        features={["Agenda personalizada", "Recordatorios automáticos", "Gestión de clientes", "Informes básicos"]}
                    />
                    <ServiceCard
                        title="Para Pequeñas Empresas"
                        description="Perfecto para clínicas, salones, estudios y negocios que necesitan coordinar múltiples agendas."
                        features={[
                            "Múltiples calendarios",
                            "Gestión de equipo",
                            "Estadísticas avanzadas",
                            "Integración con sistemas de pago",
                        ]}
                    />
                    <ServiceCard
                        title="Para Centros Educativos"
                        description="Solución completa para escuelas, academias y centros de formación que necesitan organizar horarios y clases."
                        features={[
                            "Gestión de aulas y recursos",
                            "Calendario académico",
                            "Comunicación con alumnos",
                            "Seguimiento de asistencia",
                        ]}
                    />
                    <ServiceCard
                        title="Para Grandes Corporaciones"
                        description="Sistema avanzado para empresas que requieren una solución integral de gestión de tiempo y recursos."
                        features={[
                            "Integración con sistemas corporativos",
                            "Análisis de datos avanzado",
                            "Personalización completa",
                            "Soporte prioritario",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
