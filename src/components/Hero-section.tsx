



import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Gestiona tu agenda de forma inteligente
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Optimiza tu tiempo y aumenta tu productividad con nuestra plataforma de agenda digital en línea.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" className="cursor-pointer">Comenzar Ahora</Button>
                        <Button size="lg" variant="outline" className="cursor-pointer">Ver Demo</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/bg-hero.jpg"
                        width={550}
                        height={550}
                        alt="Agenda Digital"
                        title="Agenda Digital"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
