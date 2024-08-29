export type Root = Comment[];

export interface Comment {
  type_of: string;
  id_code: string;
  created_at: string;
  body_html: string;
  user: User;
  children: Children[];
}

export interface User {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  user_id: number;
  website_url?: string;
  profile_image: string;
  profile_image_90: string;
}

export interface Children {
  type_of: string;
  id_code: string;
  created_at: string;
  body_html: string;
  user: User2;
  children: Children2[];
}

export interface User2 {
  name: string;
  username: string;
  twitter_username?: string;
  github_username?: string;
  user_id: number;
  website_url?: string;
  profile_image: string;
  profile_image_90: string;
}

export interface Children2 {
  type_of: string;
  id_code: string;
  created_at: string;
  body_html: string;
  user: User3;
  children: any[];
}

export interface User3 {
  name: string;
  username: string;
  twitter_username: any;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}
