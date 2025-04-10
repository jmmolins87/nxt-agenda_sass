



import type React from "react"
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}


export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col justify-center items-center text-center h-full">
      <CardHeader>
        {icon}
        <CardTitle>{ title }</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{ description }</CardDescription>
      </CardContent>
    </Card>
  )
}
