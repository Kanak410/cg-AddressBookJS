export class AddressBookContact{
    constructor(...params){
        this.first_name=this.validateName(params[0],"First Name");
        this.Last_name=this.validateName(params[1],"Last Name");
        this.address=this.validateAddress(params[2],"Address");
        this.city=this.validateAddress(params[3],"City");
        this.state=this.validateAddress(params[4],"State");
        this.zipcode=this.validateZip(params[5]);
        this.phone_number=this.validatePhoneNumber(params[6]);
        this.email=this.validateEmail(params[7]);

    }
    validateName(name,field){
        let nameRegex = /^[A-Z][a-z]{2,}$/
        if(!nameRegex.test(name)) throw new Error(`${field} is invalid !!`)
        return name;
      }
      validateAddress(address,field){
        let addressRegex = /^[a-zA-Z0-9\s]{3,}$/
        if(!addressRegex.test(address)) throw new Error(`${field} is invalid !!`)
        return address;
      }
      validateZip(zipcode){
        let zipRegex = /^[a-zA-Z0-9\s]{3,}$/
        if(!zipRegex.test(zipcode))throw new Error ('Zip Code is invalid !!')
            return zipcode
      }
      validatePhoneNumber(phone_number){
        let phoneRegex=/^\d{10}$/
        if(!phoneRegex.test(phone_number)) throw new Error("Phone Number is invalid !!") 
            return phone_number
      }
      validateEmail(email){
        let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailRegex.test(email)) throw new Error ("Email is invalid !!")
            return email
      }
    }