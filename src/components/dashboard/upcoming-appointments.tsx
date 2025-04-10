



import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"


export function UpcomingAppointments() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Servicio</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingAppointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{appointment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{appointment.name}</div>
                  <div className="text-sm text-muted-foreground">{appointment.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{appointment.service}</TableCell>
            <TableCell>{appointment.time}</TableCell>
            <TableCell>
              <Badge
                variant={
                  appointment.status === "Confirmado"
                    ? "default"
                    : appointment.status === "Pendiente"
                      ? "outline"
                      : "secondary"
                }
              >
                {appointment.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Ver
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const upcomingAppointments = [
  {
    id: "1",
    name: "Roberto Sánchez",
    email: "roberto@example.com",
    service: "Corte de cabello",
    time: "09:00",
    status: "Confirmado",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "Carmen Díaz",
    email: "carmen@example.com",
    service: "Masaje terapéutico",
    time: "10:30",
    status: "Pendiente",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "Miguel Torres",
    email: "miguel@example.com",
    service: "Consulta médica",
    time: "11:45",
    status: "Confirmado",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Sofía Navarro",
    email: "sofia@example.com",
    service: "Manicura",
    time: "13:15",
    status: "Reprogramado",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Javier Moreno",
    email: "javier@example.com",
    service: "Limpieza facial",
    time: "14:30",
    status: "Confirmado",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]
