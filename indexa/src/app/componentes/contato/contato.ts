export interface Contato {
  id: number;
  avatar: string | ArrayBuffer //arraybuffer lida com dados binarios 
  nome: string;
  telefone: string;
  email: string;
  aniversario?: string;
  redes?: string;
  observacoes?: string;
}
