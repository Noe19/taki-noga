import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators';
import * as auth from 'firebase/app';
//import { User } from '../service/user';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { OperationType, User } from '@firebase/auth';
import { RouterLink } from '@angular/router';


@Injectable()
export class AuthService {

 // public user : User;
  constructor(private afAuth :AngularFireAuth) { }

  
 async login(email:string,password:string)
 {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
  
      ); return result;
      
    } catch (error) {
      console.log('No se ha podido  realizar el login correctamente',error,'login');
      alert("No se ha podido  realizar el login correctamente "+ error);
      return null;
      
    }
   
   }
 
   async register(email:string,password:string):
   Promise<any>{
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {console.log(error,'register')
    
    }

  }
  async logout(){

    await this.afAuth.signOut();
  }
  //obtener el usuario que inicio sesion en el sistema
  getCurrentUser(){

    return this.afAuth.authState.pipe(first());
  }
}
