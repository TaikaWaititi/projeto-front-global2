
/**
 * Types mapped from backend Java classes (simplified).
 * See the uploaded "Classes Java oficial.docx" for full backend class list. fileciteturn0file0
 */

export interface Carreira {
  idCarreira: number;
  nomeCarreira: string;
  descricao?: string;
  habilidadesNecessarias?: string;
  salarioMedio?: number;
  nivelDemanda?: string;
}

export interface Curso {
  idCurso: number;
  nomeCurso: string;
  plataforma?: string;
  duracao?: string;
  nivel?: string;
  carreira?: Carreira;
}

export interface Usuario {
  idUsuario: number;
  nomeUsuario: string;
  email: string;
  idade?: number;
  escolaridade?: string;
  estadoId?: number;
}

export interface Pergunta {
  idPergunta: number;
  descricao: string;
}

export interface Alternativa {
  idAlternativa: number;
  perguntaId: number;
  descricao: string;
  carreiraId?: number;
}

export interface RecomendacaoCarreira {
  idRecomendacao: number;
  usuarioId: number;
  carreiraId: number;
  nivelCompatibilidade?: string;
  justificativa?: string;
}
