
export interface Project {
  id: string;
  title: string;
  edge: string;
  role: string;
  problem: string;
  action: string;
  impact: string;
  color: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
