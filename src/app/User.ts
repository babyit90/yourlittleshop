export class User{
    id: number;
    email: string;
    name: string;
    password : {
        pwd: string,
        confirmPwd: string
    }
}