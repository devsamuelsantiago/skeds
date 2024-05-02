import { EventType } from '@/common/models/event';

export const events: EventType[] = [
  {
    id: 1,
    title: 'Prova de Filosofia',
    dueDate: new Date(2024, new Date().getMonth(), 1),
    endDate: new Date(2024, new Date().getMonth(), 1),
    createdAt: new Date(),
    creator: 'Prof. Alberto',
    groups: [],
    files: [],
    content:
      'A prova de Filosofia abordará os principais conceitos estudados ao longo do trimestre, incluindo filósofos importantes e suas teorias.',
  },
  {
    id: 2,
    title: 'Seminário de Ciências',
    dueDate: new Date(2024, new Date().getMonth(), 7),
    endDate: new Date(2024, new Date().getMonth(), 7),
    createdAt: new Date(),
    creator: 'Prof.ª Carla',
    groups: [],
    files: [],
    content:
      'No seminário de Ciências, cada grupo apresentará um experimento científico. Prepare uma apresentação clara e objetiva.',
  },
  {
    id: 3,
    title: 'Reunião de Pais e Mestres',
    dueDate: new Date(2024, new Date().getMonth(), 12),
    endDate: new Date(2024, new Date().getMonth(), 12),
    createdAt: new Date(),
    creator: 'Escola XYZ',
    groups: [],
    files: [],
    content:
      'A reunião de Pais e Mestres é uma oportunidade para discutir o progresso acadêmico dos alunos e questões administrativas da escola.',
  },
  {
    id: 4,
    title: 'Festival de Teatro',
    dueDate: new Date(2024, new Date().getMonth(), 15),
    endDate: new Date(2024, new Date().getMonth(), 16), // Termina no dia seguinte
    createdAt: new Date(),
    creator: 'Departamento de Artes',
    groups: [],
    files: [],
    content:
      'O Festival de Teatro é um evento anual onde os alunos apresentam peças teatrais. Pratique suas falas e movimentos.',
  },
  {
    id: 5,
    title: 'Dia de Estudo Dirigido',
    dueDate: new Date(2024, new Date().getMonth(), 20),
    endDate: new Date(2024, new Date().getMonth(), 21), // Termina um dia depois
    createdAt: new Date(),
    creator: 'Escola XYZ',
    groups: [],
    files: [],
    content:
      'No Dia de Estudo Dirigido, revisaremos os principais tópicos estudados no trimestre e esclareceremos dúvidas. Traga suas perguntas.',
  },
  {
    id: 6,
    title: 'Palestra sobre Saúde',
    dueDate: new Date(2024, new Date().getMonth(), 24),
    endDate: new Date(2024, new Date().getMonth(), 25), // Termina um dia depois
    createdAt: new Date(),
    creator: 'Secretaria de Saúde',
    groups: [],
    files: [],
    content:
      'A palestra sobre Saúde discutirá temas como alimentação saudável, atividade física e prevenção de doenças. Anote suas dúvidas.',
  },
  {
    id: 7,
    title: 'Excursão Cultural',
    dueDate: new Date(2024, new Date().getMonth(), 27),
    endDate: new Date(2024, new Date().getMonth(), 29), // Termina dois dias depois
    createdAt: new Date(),
    creator: 'Departamento de História',
    groups: [],
    files: [],
    content:
      'A excursão cultural nos levará a museus e locais históricos da cidade. Esteja preparado para aprender e se divertir.',
  },
  {
    id: 8,
    title: 'Atividade de Encerramento do Mês',
    dueDate: new Date(2024, new Date().getMonth(), 31),
    endDate: new Date(2024, new Date().getMonth(), 31),
    createdAt: new Date(),
    creator: 'Escola XYZ',
    groups: [],
    files: [],
    content:
      'A atividade de encerramento do mês será um momento de integração e celebração das conquistas alcançadas ao longo do trimestre.',
  },
];
