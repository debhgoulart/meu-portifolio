export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  isCurrent: boolean
  description: string
  achievements: string[]
  skills: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  grade: string
  status: string
  description?: string
}

export interface ExtracurricularItem {
  name: string
  badge: string
  role?: string
  description: string
  topics: string[]
}

export interface SkillCategory {
  category: string
  description: string
  items: {
    name: string
    highlight?: boolean
    iconName?: string
  }[]
}

export interface ProjectItem {
  id: string
  index?: string
  title: string
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Acadêmico'
  description: string
  year?: string
  role?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  statusBadge?: string
  architecture?: string[]
  metrics?: string
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  shortBio: string
  aboutParagraphs: string[]
  location: string
  coordinates: string
  status: string
  social: SocialLinks
}
