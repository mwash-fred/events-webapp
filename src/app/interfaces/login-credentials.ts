export interface LoginCredentials {
    email?: string,
    password?:  string,
}

export interface LoginResponse{
    jwt?: string;
    email?: string;
    authorities?: string[];
}
