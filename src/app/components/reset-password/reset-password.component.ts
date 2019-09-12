import { 
  Component, 
  OnInit,
  ViewChild,
  ElementRef
 } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ResetPassService } from './reset-password.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  reset: FormGroup;
  private values : HttpParams;
  private hash : string = '';
  isValid : boolean = false;
  constructor(private restServ : ResetPassService, private http : HttpClient, private router : Router, private toast : ToastrService, private url : ActivatedRoute) { 
    
    this.reset = new FormGroup({
            newPass: new FormControl('', Validators.required),
            verifiedPassword: new FormControl('', Validators.required),
          });

  
    this.reset.controls.verifiedPassword.setValidators([
         Validators.required,
         this.noIgual.bind(this.reset)
    ]);
  }

  
  ngOnInit() {
    this.verifyUrl(this.url.snapshot.params.hash);
  }

  changePassword(){
    this.hash = this.url.snapshot.params.hash;

    this.values = new HttpParams()
    .set('newPassword', this.reset.value.newPass);
    console.log(this.values);

    this.restServ.changePassword(this.hash,this.values).subscribe( (res : any) =>{
    this.toast.success('Se ha modificado la contraseña con éxito ', 'Éxito!');
    this.router.navigate(['/home']);
  }, error =>{
      console.log("Error", error.error.message);
      this.toast.error(error.error.message, 'Error');
  })
  }

  verifyUrl(hashID : any){
    this.hash = hashID;

    this.restServ.verificarUrl(this.hash).subscribe( (res : any) =>{
      this.isValid = true;
    }, error =>{
      setTimeout(() =>{
        this.router.navigate(['/home'])
      }, 5000);
    })

  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    const reset: any = this;
    if(reset.controls.newPass.value !== null && reset.controls.verifiedPassword.value !== null){
    if (reset.controls.newPass.value !== reset.controls.verifiedPassword.value) {
      return {
        noiguales: true
      };
    }
  }
    return null;
  }
}
