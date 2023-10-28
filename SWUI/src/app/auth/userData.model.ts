export class UserData{
    constructor(
        public email:string,
        private _token:string,
        public tokenExpirationTime:Date
    )
    { }
    getToken(){
        if(!this.tokenExpirationTime || this.tokenExpirationTime> new Date)
        {return;}
        return this._token;
    }
}