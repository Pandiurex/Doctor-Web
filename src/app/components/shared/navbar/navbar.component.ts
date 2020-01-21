import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = false;
  isAdmin = false;
  isDoctor = false;
  tipoUsuario = sessionStorage.getItem('tipoUsuario');
  constructor(private router : Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('usuario')!=null){
      this.user = true;
    }

    if(this.tipoUsuario==="1"){
      this.isDoctor = true;
    }
    else if(this.tipoUsuario=="3"){
      this.isAdmin = true;
    }
    console.log(this.isDoctor);
    console.log(this.user);
  }

  logout(){
    sessionStorage.clear();
    window.location.reload();
    this.router.navigate(['/home']);
  }

}
