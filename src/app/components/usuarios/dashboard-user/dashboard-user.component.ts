import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Perfil } from '../../dashboard/perfil.model';
import { PerfilService } from '../../perfil.service';
import { MensajeSolicitud } from '../solicitud/mensaje.modal';
import { SolicitudService } from '../solicitud/solicitud.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
  providers:[AuthService],
})
export class DashboardUserComponent implements OnInit {
  Perfil: Perfil[]
  public usuario : any;
  perfilResf:any;
  MensajeSolicitud:MensajeSolicitud[]
  public roles_admin:any;
  public valor_aceptacion:any;
  constructor(public afAuth :AngularFireAuth,private router : Router,private firestore :AngularFirestore,private solicitud:SolicitudService) { }

  ngOnInit(): void {
    
    this.usuario = localStorage.getItem('usuario')
    this.roles_admin = localStorage.getItem('roles')
    this.valor_aceptacion=localStorage.getItem('artista_aceptado');
  }
  // salir de usuario
  async salir(){
   
    //limpiando de la cache
  // localStorage.clear();
   localStorage.clear();
   //this.auth.logout();
   await this.afAuth.signOut();
   this.router.navigate(['/register']);   
   console.log('saliendo_inicio123' ,this.afAuth.signOut()) ;
   console.log('usuario que salio',this.usuario)
   
   
  
 }



}
