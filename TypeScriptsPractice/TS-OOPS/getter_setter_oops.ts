
class Person{
    private _age : number
    private _username: string
    private _password: string

    constructor(age: number, userName: string, Password: string) {
        this._age = age
        this._username = userName
        this._password = Password
    }

    public get age(){
        return this._age
    }

    public set age(AgeNum: number) {
        this._age = AgeNum
    }

}

const Object1 = new Person(29, "Rahul", "User@12345")
console.log("get user age:", Object1.age)
Object1.age = 35
console.log("get user age:", Object1.age)