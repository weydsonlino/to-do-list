interface ITasks {
  tittle: string;
  description: string;
  status: "Em andamento" | "Completado" | "Pendente";
  priority: number;
}
export type { ITasks };
