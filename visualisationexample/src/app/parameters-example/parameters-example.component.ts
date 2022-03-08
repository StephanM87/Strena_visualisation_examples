import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http"
import {Observable } from "rxjs"



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
  condition = false
  path = "./assets/ketcher/ketcher.html"
  pathPicture = "./assets/welpe.jpg"
  controllerSrc:any
  smiles:any

  constructor(private fb:FormBuilder, private sanitizer: DomSanitizer, 
              private client:HttpClient) {

    this.formfb = this.fb.group({
      name:[""],
      smiles:[""],
      inchi:[""],
      formula:[""],
      reactionRole:[""]
    })
    }

  
    toggleCondition(){
      
      if (this.condition){
        this.condition = false
      }
      else if(!this.condition){
        this.condition = true
      }
    }


    getData(smiles:any):Observable<any>{

      this.smiles = smiles
      
      let send_smiles = JSON.stringify({smiles:this.smiles})
      console.log("Hier kommt der smiles", send_smiles)
      return this.client.post("http://127.0.0.1:5000/pubchempy_query/", send_smiles)
      
    }

    printPayload(request:any){
      let request_obj = JSON.parse(request)
      let payload = request_obj["payload"]
      console.log(payload)
      console.log(payload["mc"])

      let parser = {
        name:payload["name"],
        smiles:this.smiles,
        inchi:payload["inchi"],
        formula:payload["mc"],
        reactionRole:"Substrate"
      }

      console.log(parser)

      this.formfb.setValue(parser)
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
    this.getData(this.ketc.getSmiles()).subscribe(query => this.printPayload(query))

      
  }




}
