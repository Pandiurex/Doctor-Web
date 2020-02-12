import { AbstractControl } from "@angular/forms";
import * as moment from 'moment';
export class DateValidator {
    static isFutureDate(control : AbstractControl){
        let todayDate = moment().format('L');
        let controlDate = moment(control.value).format('L');
        if(controlDate < todayDate || controlDate != todayDate){
            return null;
        }else{
            return{'isFutureDate': true}
        }
    }

    static noValidAge(control: AbstractControl){
        let enteredDate = moment(control.value).fromNow();
        console.log(enteredDate);
        if(enteredDate == "18 years ago" || enteredDate == "17 years ago" || enteredDate == "16 years ago"){
            return null
        }else{
            return{'noValidAge': true}  
        }
        
    }
}