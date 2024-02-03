// userModels.ts

import { User } from "./userModels";

// Interface for the input data when toggling follow state
export interface ToggleFollowUserInput {
    id?: string; // Optional: Provide the user ID
    username?: string; // Optional: Provide the username
  }
  
  // Interface for the payload when toggling follow state
  export interface ToggleFollowUserPayload {
    user: User; // User object representing the user that was followed/unfollowed
  }
