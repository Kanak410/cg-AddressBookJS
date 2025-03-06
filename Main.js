import {AddressBookContact} from"./AddressBookContact.js";
class AddressBook{
    constructor(){
        this.contacts=[];
    }
    addContact(contact){
        this.contacts.push(contact);
        console.log("Sucessfully added the contact");
    }
    displayContact(){
        console.log("Address Book Contact");
        this.contacts.forEach((contact,index) => console.log(`${index+1}.${contact.toString()}`));
    }
    findAndEditContact(name,newContact){
        let contact=this.contacts.find(c=>c.first_name==name);
        if(contact){
            Object.assign(contact,newContact);
            console.log(`contact update sucessfully : `+contact);
        }else{
            console.log(`contact with name "${name} not found!"`);
        }
    }
}
    const addressBook=new AddressBook();


let contact1=new AddressBookContact("Kanak","Rajput","185A","Bhopal","Madhya pradesh",462021,6263733333,"kanak@example.com")
let contact2=new AddressBookContact("Som","Rajput","73 Avenue","Itarsi","Madhya Pradesh",46115,9187536781,"som@example.com")
addressBook.addContact(contact1)
addressBook.addContact(contact2)
addressBook.findAndEditContact("Kanak",{phone_number:123456789,city:"jabalpur"})
addressBook.findAndEditContact("Som",{phone_number:987654321,city:"Itarsi"})
//addressBook.displayContact()

