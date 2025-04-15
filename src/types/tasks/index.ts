interface ITasks {
  title: string;
  description: string;
  status: "Em andamento" | "Completado" | "Pendente";
  priority: number;
  categories?:number[];
}
export type { ITasks };
