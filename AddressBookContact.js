export class AddressBookContact{
    constructor(...params){
        this.first_name=params[0];
        this.Last_name=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zipcode=params[5];
        this.phone_number=params[6];
        this.email=params[7];

    }
}