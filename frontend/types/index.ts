/**
 * TypeScript interfaces for PromptNest MVP
 * Data shapes for the application
 */

export interface User {
  id: string;
  email: string;
  username?: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface Prompt {
  id: string;
  authorId: string;
  title: string;
  body: string;
  description?: string;
  visibility: 'public' | 'unlisted' | 'private';
  createdAt: string;
  updatedAt: string;
  views: number;
  favoritesC: number;
  runsC: number;
  author: User;
  tags: Tag[];
  isFavorited?: boolean;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  promptId: string;
  authorId: string;
  content: string;
  createdAt: string;
  author: User;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'system';
  message: string;
  read: boolean;
  createdAt: string;
  promptId?: string;
  authorId?: string;
}

export interface CreatePromptData {
  title: string;
  content: string;
  description?: string;
  visibility?: 'public' | 'unlisted' | 'private';
  tags?: string[];
}

export interface FilterOptions {
  sortBy: 'newest' | 'oldest' | 'popular' | 'trending';
  visibility: 'all' | 'public' | 'unlisted';
  tags: string[];
  search?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  badge?: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}
