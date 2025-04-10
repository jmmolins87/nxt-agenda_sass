



import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
    title: string
    price: string
    description: string
    features: string[]
    buttonText: string
    popular?: boolean
}

export function PricingCard({ title, price, description, features, buttonText, popular = false }: PricingCardProps) {
    return (
        <Card className={`flex flex-col h-full ${popular ? "border-primary shadow-lg" : ""}`}>
            {popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium rounded">Más Popular</div>
            )}
            <CardHeader className="w-full">
                <CardTitle>{ title }</CardTitle>
                <div className="mt-2">
                    <span className="text-3xl font-bold">{ price }</span>
                    <span className="text-muted-foreground"> /mes</span>
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 w-full">
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="w-full cursor-pointer" variant={popular ? "default" : "outline"}>
                    { buttonText }
                </Button>
            </CardFooter>
        </Card>
    )
}
