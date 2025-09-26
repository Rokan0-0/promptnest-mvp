/**
 * Shared application types.
 */
export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  author: User;
  liked?: boolean;
  likesCount?: number;
  comments?: Comment[];
  createdAt: string;
}

export interface CreatePromptData {
  title: string;
  description: string;
  content: string;
  tags: string[];
}


