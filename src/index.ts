import { Especialidade } from "./types/especialidades";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";

// Especialidades
const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
};
const ortopedia: Especialidade = {
  id: 2,
  nome: "Ortopedia",
  descricao: "Tratamento de ossos e articulações",
};
const pediatria: Especialidade = {
  id: 3,
  nome: "Pediatria",
};
const ginecologia: Especialidade = {
  id: 4,
  nome: "ginecologia",
};

// Médicos
const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};
const medico2: Medico = {
  id: 2,
  nome: "Dra. Ana Paula Costa",
  crm: "CRM54321",
  especialidade: ortopedia,
  ativo: true,
};
const medico3: Medico = {
  id: 3,
  nome: "Dr. João Mendes",
  crm: "CRM98765",
  especialidade: pediatria,
  ativo: true,
};
const medico4: Medico = {
  id: 4,
  nome: "Dr. Miguel Rodriguez",
  crm: "CRM34210",
  especialidade: ginecologia,
  ativo: true,
};

// Pacientes
const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
};
const paciente2: Paciente = {
  id: 2,
  nome: "Maria Silva",
  cpf: "987.654.321-00",
  email: "maria@email.com",
  telefone: "(11) 98765-4321",
};
const paciente3: Paciente = {
  id: 3,
  nome: "Pedro Santos",
  cpf: "456.789.123-00",
  email: "pedro@email.com",
};
const paciente4: Paciente = {
  id: 4,
  nome: "Arthur Silva",
  cpf: "456.647.321-00",
  email: "arthur@email.com",
};

function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "agendada",
  };
}

function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}

function agendarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "agendada",
  };
}

function realizadaConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "realizada",
  };
}

function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}

function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}

function listarConsultasPorStatus(
  consultas: Consulta[],
  status: StatusConsulta
): Consulta[] {
  return consultas.filter((consulta) => consulta.status === status);
}

function listarConsultasFuturas(consultas: Consulta[]): Consulta[] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); 
  return consultas.filter((consulta) => consulta.data >= hoje);
}

const consultas: Consulta[] = [];

// Primeira Consulta
const consulta1 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(),
  350
);
const consultaConfirmada = confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada));

// Segunda Consulta
const consulta2 = criarConsulta(
  2,
  medico2,
  paciente2,
  new Date('2026-04-25'),
  200
);
const consultaConfirmada2 = agendarConsulta(consulta2);
console.log("=== CONSULTA AGENDADA ===");
console.log(exibirConsulta(consultaConfirmada2));

// Terceira Consulta
const consulta3 = criarConsulta(
  3,
  medico3,
  paciente3,
  new Date('2026-03-01'),
  500
);

const consultaConfirmada3 = realizadaConsulta(consulta3);
console.log("=== CONSULTA REALIZADA ===");
console.log(exibirConsulta(consultaConfirmada3));

// Quarta Consulta
const consulta4 = criarConsulta(
  4,
  medico4,
  paciente4,
  new Date('2026-05-09'),
  150
);
const consultaConfirmada4 = confirmarConsulta(consulta4);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada4));

