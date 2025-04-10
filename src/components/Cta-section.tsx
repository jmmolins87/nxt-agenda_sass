



import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Comienza a optimizar tu tiempo hoy mismo
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Prueba AgendaPro gratis durante 14 días. Sin compromiso. Sin tarjeta de crédito.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-auto gap-2 sm:flex-row">
            <Button size="lg" variant="secondary">
              Comenzar Prueba Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
