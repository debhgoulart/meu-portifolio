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
  id: string
  name: string
  badge: string
  institution?: string
  period?: string
  role?: string
  description: string
  topics: string[]
  images: string[]
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
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Acadêmico' | string
  description: string
  year?: string
  date?: string
  image?: string
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
  phone: string
  coordinates: string
  status: string
  social: SocialLinks
}
