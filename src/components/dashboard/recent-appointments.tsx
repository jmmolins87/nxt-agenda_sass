


import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

export function RecentAppointments() {
  return (
    <div className="space-y-8">
      {recentAppointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={appointment.avatar} alt="Avatar" />
            <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{appointment.name}</p>
            <p className="text-sm text-muted-foreground">{appointment.service}</p>
          </div>
          <div className="ml-auto font-medium">
            {appointment.date} - {appointment.time}
          </div>
        </div>
      ))}
    </div>
  )
}


const recentAppointments = [
  {
    id: "1",
    name: "María García",
    service: "Corte de cabello",
    date: "12 Oct",
    time: "10:00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Juan Pérez",
    service: "Masaje terapéutico",
    date: "12 Oct",
    time: "11:30",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    service: "Manicura",
    date: "12 Oct",
    time: "13:00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Carlos López",
    service: "Consulta médica",
    date: "12 Oct",
    time: "15:30",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Laura Martínez",
    service: "Limpieza facial",
    date: "12 Oct",
    time: "16:45",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]
