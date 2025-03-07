import {AddressBookContact} from"./AddressBookContact.js";
class AddressBook{
    constructor(){
        this.contacts=[];
    }
    addContact(contact){
        let duplicateContact=this.contacts.filter((c) =>c.first_name===contact.first_name && c.last_name===contact.last_name).map((c) =>c.first_name+" "+c.last_name);
        if(duplicateContact.length>0){
            console.log(`Error: Contact "${contact.first_name}${contact.last_name}" already exists!`);
            return;
        }
        this.contacts.push(contact);
        console.log("Sucessfully added the contact");
    }
    displayContact(){
        console.log("Address Book Contact");
        this.contacts.forEach((contact,index) => console.log(`${index+1}.${contact.toString()}`));
    }
    findAndEditContact(name,newContact){
        let contact=this.contacts.find(c=>c.first_name===name);
        if(contact){
            Object.assign(contact,newContact);
            console.log(`contact update sucessfully : `+contact);
        }else{
            console.log(`contact with name "${name} not found!"`);
        }
    }
    deleteContact(name){
        let index=this.contacts.findIndex(c =>c.first_name ===name)
        if(index !== -1){
            this.contacts.splice(index,1)
            console.log(`Contact "${name}"deleted sucessfully`)
        }
        else{
            console.log(`Contact with name "${name}" not found `)
        }
    }
    getContactCount(){
        return this.contacts.reduce((count) => count+1,0)
    }
 UC9_getPersonByCityState
    viewPersonsByCity() {
      let cityMap = this.contacts.reduce((acc, contact) => {
        acc[contact.city] = acc[contact.city] || [];
        acc[contact.city].push(contact.first_name + " " + contact.last_name);
        return acc;
      }, {});
      console.log("People grouped by City:", cityMap);
    }
  
  
    viewPersonsByState() {
      let stateMap = this.contacts.reduce((acc, contact) => {
        acc[contact.state] = acc[contact.state] || [];
        acc[contact.state].push(contact.first_name + " " + contact.last_name);
        return acc;
      }, {});
      console.log("People grouped by State:", stateMap);
    }
  }

    searchByCity(city) {
        let peopleInCity = this.contacts
          .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
          .map(contact => contact.first_name + " " + contact.last_name);
        console.log(`People in ${city}:`, peopleInCity.length > 0 ? peopleInCity.join(", ") : "No contacts found");
      }
      searchByState(state) {
        let peopleInState = this.contacts
          .filter(contact => contact.state.toLowerCase() === state.toLowerCase()) 
          .map(contact => contact.first_name + " " + contact.last_name);
        console.log(`People in ${state}:`, peopleInState.length > 0 ? peopleInState.join(", ") : "No contacts found");
      }
    
    }
    
main

    const addressBook=new AddressBook();


let contact1=new AddressBookContact("Kanak","Rajput","185A","Bhopal","Madhya pradesh",462021,6263733333,"kanak@example.com")
let contact2=new AddressBookContact("Som","Rajput","73 Avenue","Itarsi","Madhya Pradesh",461115,9187536781,"som@example.com")
let contact3=new AddressBookContact("Tina","Rajput","5253 Pink","Hoshangabad","Madhya Pradesh",461111,9876543210,"tina@example.com")
let contact4=new AddressBookContact("Jia","Patel","123 Nayas colony","Indore","Madhya Pradesh",461116,6263733678,"jia@example.com")
let contact5=new AddressBookContact("Piya","Rajput","210A","Raipur","Madhya pradesh",461123,7896543216,"piya@example.com")
addressBook.addContact(contact1)
addressBook.addContact(contact2)
addressBook.addContact(contact3)
addressBook.addContact(contact4)
addressBook.addContact(contact5)
//addressBook.deleteContact("Som")
addressBook.findAndEditContact("Kanak",{phone_number:123456789,city:"jabalpur"})
addressBook.findAndEditContact("Som",{phone_number:987654321,city:"Itarsi"})
addressBook.deleteContact("diss")
console.log(`Total contacts: ${addressBook.getContactCount()}`);
 UC9_getPersonByCityState
addressBook.viewPersonsByCity();
addressBook.viewPersonsByState();

addressBook.searchByCity("Bhopal");
addressBook.searchByState("Madhya Pradesh");




 main
//addressBook.displayContact()

