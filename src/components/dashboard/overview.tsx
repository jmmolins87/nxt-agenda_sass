"use client"

import { 
    Bar, 
    BarChart, 
    ResponsiveContainer, 
    XAxis, 
    YAxis, 
    Tooltip 
} from "recharts"

const data = [
  {
    name: "Ene",
    citas: 220,
    clientes: 120,
  },
  {
    name: "Feb",
    citas: 300,
    clientes: 150,
  },
  {
    name: "Mar",
    citas: 280,
    clientes: 130,
  },
  {
    name: "Abr",
    citas: 250,
    clientes: 100,
  },
  {
    name: "May",
    citas: 320,
    clientes: 180,
  },
  {
    name: "Jun",
    citas: 390,
    clientes: 220,
  },
  {
    name: "Jul",
    citas: 420,
    clientes: 250,
  },
  {
    name: "Ago",
    citas: 380,
    clientes: 200,
  },
  {
    name: "Sep",
    citas: 430,
    clientes: 230,
  },
  {
    name: "Oct",
    citas: 500,
    clientes: 280,
  },
  {
    name: "Nov",
    citas: 470,
    clientes: 260,
  },
  {
    name: "Dic",
    citas: 540,
    clientes: 300,
  },
]


export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <YAxis stroke="#888888" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="citas" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="clientes" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
