export class User {   //Adım 5 : forma girilecek
    // olan kullanıcı bilgileri tanımlanmalıdır
    constructor(
        public name : string,
        public email : string,
        public phone : number,
        public topic : string,
        public timePreference : string,
        public subscribe : boolean
    ){}
}
