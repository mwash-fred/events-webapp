export interface User {
    uid?: string;
    name?: string;
    email?: string;
    mobileNo?: string;
    password?: string;
    isEnabled?: boolean;
    isCredentialsExpired?: boolean;
    isAccountLocked?: boolean;
    isAccountExpired?: boolean;
    roles?: Role[];
    postedTime?: string;
    modifiedTime?: string;
  }
  
  export interface Role {
    uid?: string;
    name?: string;
    postedTime?: string;
    modifiedTime?: string;
    privileges?: Privilege[];
  }
  
  export interface Privilege {
    uid?: string;
    name?: string;
  }
  