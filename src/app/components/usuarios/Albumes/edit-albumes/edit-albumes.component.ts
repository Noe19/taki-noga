import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerosService } from '../../generos/generos.service';
import { AlbumesService } from '../albumes.service';
import { Albumes } from '../create-albumes/albumes.modal';
import { ImagenesAlbumes } from '../create-albumes/imagen_Albumes.modal';

@Component({
  selector: 'app-edit-albumes',
  templateUrl: './edit-albumes.component.html',
  styleUrls: ['./edit-albumes.component.css']
})
export class EditAlbumesComponent implements OnInit {



  public usuario: any;
  //generos:Generos[];
  public albumForm : FormGroup;
  public imagen:any;
  todoslosalbumes:Albumes[];
  imagenes:ImagenesAlbumes[]=[];
 // imgURL="../assets/imagenes/camera.png";
  //file:any;
  public url:any;

  // editar
  generosRef:any;
  // para editar

  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  
  _file;
  //AlbumService: any;

  constructor(private router:Router,private fb:FormBuilder,private GenerosImg:GenerosService, private activeRoute: ActivatedRoute
    ,public formBuilder:FormBuilder, private Alb:AlbumesService) {
      this.albumForm = this.formBuilder.group({
        name: [''],
        imagen:[''],
        year:[''],
        author:[''],
        id:[''],
        referencia:['']

           
      })
  }

 
 

  ngOnInit() {
   

 console.log('id_editable',this.activeRoute.snapshot.paramMap.get('id'))
// this.usuario = localStorage.getItem('usuario')
 
 const id2 = this.activeRoute.snapshot.paramMap.get('id');
 console.log('pasar',id2)
 this.Alb.getPostbyId_album(id2).subscribe(res =>{
   this. generosRef = res;
   this.url = this.generosRef.imagen
   console.log(this.generosRef.imagen)
   this.albumForm = this.formBuilder.group({
    
     name: [this.generosRef.name],  
    id:[this.generosRef.id], 
    imagen:[this.generosRef.imagen],
    referencia:[this.generosRef.referencia],
    year:[this.generosRef.year],
    author:[this.generosRef.author]

  
   })
   console.log('valueid',this.generosRef.id)
 })
  //this.imagenes_generos =this.generosRef.imagenUrl
   
  }


  onSubmit(){
 
  // datos de editar

  
  this.Alb.add(this.albumForm.value, this._file,this.isChanged)
  console.log('datos para editar',this.albumForm.value)
  this.isChanged = false;
  this.file.nativeElement.value = "";

  }

  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();
    reader.onload = () => {
      this.url = reader.result;
    };
    if (target.files.length > 0) {
      this._file = target.files[0];
      reader.readAsDataURL(this._file);
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

}
