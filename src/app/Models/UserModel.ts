export class UserModel{
    Username: string;
    Password: string;
}

export class RegistrationModel extends UserModel{
    RepeatUsername: string;
    RepeatPassword: string;
}