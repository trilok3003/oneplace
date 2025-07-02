interface Contact {
    phone: string,
    email: string
}
class Student {
    name : string;
    contact: Contact;
    constructor (name, contact) {
        this.name = name;
        this.contact = contact;
    }
}
var stu1 = new Student("trilok",{"phone": "2324343434", "email": "trilok@gamil.com"});
console.log(stu1);

