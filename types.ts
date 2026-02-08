
export interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Online' | 'Presencial';
  description: string;
}

export interface SectionBlock {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  linkText: string;
}
