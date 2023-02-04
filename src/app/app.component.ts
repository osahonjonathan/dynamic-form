
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  datas = {
    clients: [
      { clientName: "PHCN",
        inputs: [
          {
            name: "metreno",
            label: "Metre No",
            type: "text"
          },
          {
            name: "location",
            label: "Location",
            type: "text"
          },
          {
            name: "phonenumber",
            label: "phonenumber",
            type: "phonenumber"
          },
          {
            name: "email",
            label: "Email",
            type: "email"
          },
          {
            name: "amountrecharging",
            label: "Amount Recharging",
            type: "text"
          },
         
        ]
      },
      { clientName: "LAWMA",
        inputs: [
          {
            name: "brand",
            label: "Vehicle Brand",
            type: "text"
            
          },
          {
            name: "model",
            label: "Vehicle Model",
            type: "text"
            
          },
          {
            name: "vehicleyear",
            label: "Vehicle Year",
            type: "text"
            
          },
          {
            name: "vehicleplatenumber",
            label: "Vehicle Plate Number",
            type: "text"
            
          },
          {
            name: "vehiclereferencenumber",
            label: "Vehicle Referencenumber",
            type: "text"
            
          },
          {
            name: "ownername",
            label: "Owner Name",
            type: "text"
            
          },
          {
            name: "amount",
            label: "Amount",
            type: "text"
            
          },
          {
            name: "phonenumber",
            label: "Phonenumber",
            type: "number"
            
          },
          {
            name: "email",
            label: "Email",
            type: "email"
            
          }
          
        ]
      },
      { clientName: "School",
        inputs: [
          {
            name: "nameofschool",
            label: "Name of School",
            type: "text"
          },
          {
            name: "department",
            label: "Department",
            type: "text"
          },
         
        ]
      },
      { clientName: "Church",
        inputs: [
          {
            name: "nameofchurch",
            label: "Name of Church",
            type: "text"
          },
          {
            name: "datefounded",
            label: "Date Founded",
            type: "date"
          },
         
        ]
      }
    ]
  };
  


    
  


  constructor(private fb: FormBuilder) {}

  clientsForm!: FormGroup;
  currentClientsInputs: any[] = [];
  selectedClient!:string;
  

  
 

  ngOnInit() {
    
  }


  changeClient(event:any){
    this. selectedClient = event.target.value
    console.log (this.selectedClient)
    this.updateCurrentClient(this.selectedClient);
    this.createForm();

  }

  updateCurrentClient(selectedClient:any){

    let currentClient = this.datas.clients.find(x => x.clientName === selectedClient);
    
    if (currentClient) {
      this.currentClientsInputs = currentClient.inputs;
      console.log(this.currentClientsInputs);
    } else {
      console.log("Client not found.");
    }

  }
  createForm() {
    this.clientsForm = this.fb.group({});
    this.currentClientsInputs.forEach(input => {
      this.clientsForm.addControl(input.name, new FormControl(''));
    });
  }

  



  

  title = 'payment-types';
}
