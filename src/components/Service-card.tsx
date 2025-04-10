




import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ServiceCardProps {
    title: string
    description: string
    features: string[]
}


export function ServiceCard({ title, description, features }: ServiceCardProps) {
    return (
        <Card className="h-full w-full p-5 text-center">
            <CardHeader className="w-full">
                <CardTitle>{ title }</CardTitle>
                <CardDescription>{ description }</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={ index } className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{ feature }</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
