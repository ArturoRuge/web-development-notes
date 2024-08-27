

export class FriendAge {
    constructor (name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;

    }
    returnAge(){
        const today = new Date();
        const birthDate = new Date(this.year, this.month - 1, this.day);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference <= 0 ){
            age -= 1;
        }
        
        return (this.name + " is " + age + " hoy!");

    }

   

}