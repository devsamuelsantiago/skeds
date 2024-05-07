import { ReleaseType } from '@/common/models/realese';

export const releases: ReleaseType[] = [
  {
    id: '1',
    title: 'Comunicado sobre Alterações no Calendário Escolar',
    creator: 'Direção',
    createdAt: new Date(2024, 4, 10), // 10 de Maio de 2024
    groups: ['Todos os Alunos'],
    files: [],
    viewed: false,
    content:
      'Informamos que devido às festividades locais, as aulas do dia 12 de junho serão suspensas. Agradecemos a compreensão e contamos com a colaboração de todos para comunicar os envolvidos.',
  },
  {
    id: '2',
    title: 'Lembrete de Reunião de Pais e Mestres',
    creator: 'Coordenação Pedagógica',
    createdAt: new Date(2024, 4, 12), // 12 de Maio de 2024
    groups: ['Pais dos Alunos do 3 EM'],
    files: [],
    viewed: false,
    content:
      'Relembramos que a próxima reunião de pais e mestres ocorrerá no dia 20 de maio, às 19h, no auditório. Discutiremos os resultados recentes e as expectativas para o restante do semestre.',
  },
  {
    id: '3',
    title: 'Aviso de Manutenção no Laboratório de Ciências',
    creator: 'Gerência de Infraestrutura',
    createdAt: new Date(2024, 4, 15), // 15 de Maio de 2024
    groups: ['Professores de Ciências', 'Alunos de Ciências'],
    files: [],
    viewed: false,
    content:
      'Informamos que o laboratório de ciências estará fechado para manutenção entre os dias 22 e 24 de maio. Solicitamos que todos os professores ajustem seus planos de aula conforme necessário.',
  },
  {
    id: '4',
    title: 'Prevenção à Saúde: Campanha de Vacinação',
    creator: 'Enfermaria Escolar',
    createdAt: new Date(2024, 4, 20), // 20 de Maio de 2024
    groups: ['Todos os Alunos', 'Funcionários'],
    files: [],
    viewed: false,
    content:
      'Convidamos toda a comunidade escolar para participar da campanha de vacinação que será realizada no campus no dia 30 de maio. Disponibilizaremos vacinas contra gripe e sarampo. Participem!',
  },
  {
    id: '5',
    title: 'Atualização sobre Protocolos de Segurança',
    creator: 'Direção de Segurança',
    createdAt: new Date(2024, 4, 25), // 25 de Maio de 2024
    groups: ['Funcionários', 'Professores'],
    files: [],
    viewed: false,
    content:
      'Lembramos que os novos protocolos de segurança já estão em vigor. Incluem medidas reforçadas de acesso ao campus e monitoramento. Todos devem portar seus crachás de identificação visíveis.',
  },
];
