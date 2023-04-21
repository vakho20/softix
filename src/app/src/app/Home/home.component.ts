import { Component } from '@angular/core';
import { User } from '../../user';
import { EnrollmentService } from '../enrollment.service';
@Component({
    selector: 'Home',
    templateUrl:"./home.component.html",
    styleUrls:['home.component.css'],
    
})
export class HomeComponent {
    userModel = new User('fsaff', "some");
    constructor(private _enrollmentService: EnrollmentService){
        
    }
    onSubmit(){
        this._enrollmentService.enroll(this.userModel)
        .subscribe(
            data => console.log("Success", data),
            error => console.log("Error", error)
        )
 }
    
        
}