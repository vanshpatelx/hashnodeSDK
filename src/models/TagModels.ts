// tagModels.ts
// Define the Tag model
export interface Tag {
    id: string;
    name: string;
    slug: string;
  }
  
  // Define the TagInput model
  export interface TagInput {
    name: string;
    slug: string;
  }
  
  // Define the TagUpdateInput model
  export interface TagUpdateInput {
    name?: string;
    slug?: string;
  }
  