import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Perfil } from '../../dashboard/perfil.model';
import { PerfilService } from '../../perfil.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  Perfil: Perfil[]
  public usuario : any;
  perfilResf:any;
  public rol_admin:any;
  constructor(private perfilService:PerfilService,public afAuth :AngularFireAuth,private router : Router,private firestore :AngularFirestore) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario')
    this.rol_admin = localStorage.getItem('roles')
  }
  salir(){
    //limpiando de la cache
   localStorage.clear();
   //this.auth.logout();
   this.router.navigate(['/home']);   
   console.log('saliendo_inicio' ) ;
   
   
  
 }

}