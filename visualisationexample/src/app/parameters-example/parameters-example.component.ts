import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-parameters-example',
  templateUrl: './parameters-example.component.html',
  styleUrls: ['./parameters-example.component.css']
})
export class ParametersExampleComponent implements OnInit {



  
  @ViewChild("iframe") KetcherFrame:any
  @ViewChild('iframe', {static: false}) iframe:any; 
  ketc:any

  frame:any
  formfb:any
  condition = true
  path = "./assets/ketcher/ketcher.html"
  pathPicture = "./assets/welpe.jpg"
  controllerSrc:any


  constructor(private fb:FormBuilder, private sanitizer: DomSanitizer) {

    this.formfb = this.fb.group({
      name:["Aldehyd"],
      smiles:["smiles"],
      inchi:["efdfs"],
      formula:["CH4COO"],
      reactionRole:["reactionrole"]
    })

    }


  ngOnInit(): void {

      this.frame=document.getElementById('iframe')
      console.log("lalalal", this.frame)
      this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.path)
      
  }


  printurl(){
    this.ketc = this.iframe.nativeElement.contentWindow.ketcher
    this.condition = true
    console.log(this.ketc)
    console.log(this.ketc.getSmiles())
  }

}
