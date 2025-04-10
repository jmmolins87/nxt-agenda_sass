


import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
    quote: string
    author: string
    role: string
    rating: number
}


export function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        />
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <p className="italic">"{ quote }"</p>
                <div className="mt-4">
                    <p className="font-medium">{ author }</p>
                    <p className="text-sm text-muted-foreground">{ role }</p>
                </div>
            </CardContent>
        </Card>
    )
}
