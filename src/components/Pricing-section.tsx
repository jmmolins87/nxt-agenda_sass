



import { PricingCard } from "@/components/Pricing-card"


export function PricingSection() {
    return (
        <section id="planes" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Planes y Precios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Elige el plan que mejor se adapte a ti
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Ofrecemos diferentes planes para adaptarnos a tus necesidades y presupuesto.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <PricingCard
                        title="Básico"
                        price="9,99€"
                        description="Ideal para profesionales independientes que están comenzando."
                        features={["1 calendario", "Hasta 100 citas mensuales", "Recordatorios por email", "Soporte básico"]}
                        buttonText="Comenzar Gratis"
                        popular={false}
                    />
                    <PricingCard
                        title="Profesional"
                        price="19,99€"
                        description="Perfecto para profesionales establecidos y pequeños negocios."
                        features={[
                            "3 calendarios",
                            "Citas ilimitadas",
                            "Recordatorios por email y SMS",
                            "Estadísticas básicas",
                            "Soporte prioritario",
                        ]}
                        buttonText="Elegir Plan"
                        popular={true}
                    />
                    <PricingCard
                        title="Empresarial"
                        price="39,99€"
                        description="La solución completa para empresas con múltiples empleados."
                        features={[
                            "Calendarios ilimitados",
                            "Citas ilimitadas",
                            "Todas las funciones premium",
                            "Estadísticas avanzadas",
                            "API para integraciones",
                            "Soporte 24/7",
                        ]}
                        buttonText="Contactar Ventas"
                        popular={false}
                    />
                </div>
            </div>
        </section>
    )
}
