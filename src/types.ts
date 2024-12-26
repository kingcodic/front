export interface Chapter {
  chapterNumber: number;
  title: string;
  content: string; // RichText content or list of image URLs
}

export interface Manga {
  id: number;
  title: string;
  author: { username: string };
  image: string;
  description: string;
  genre: string[];
  chapters: Chapter[];
}

// User type
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  role: string; // "user" | "admin"
}


// Notification type
export interface Notification {
  id: string;
  content: string;
  read: boolean;
  createdAt: string;
}

// Lightbox page type
export interface LightboxPage {
  src: string;
  alt: string;
}
