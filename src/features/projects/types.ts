export class Project {
  constructor(
    id: string,
    title: string,
    slug: string,
    category: 'web' | 'mobile' | 'design' | 'api',
    description: string,
    shortDescription: string,
    stack: string[],
    image: string,
    githubUrl: string,
    demoUrl?: string,
    featured: boolean,
    createdAt: string
  ) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.category = category;
    this.description = description;
    this.shortDescription = shortDescription;
    this.stack = stack;
    this.image = image;
    this.githubUrl = githubUrl;
    this.demoUrl = demoUrl;
    this.featured = featured;
    this.createdAt = createdAt;
  }
}

export const projects: Project[] = [];
