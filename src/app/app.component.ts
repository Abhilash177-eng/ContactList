import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: any;
  email: any;
  phno: number;
  uploadimg: any;
  baseUrl: any;
  isDialogOpen: boolean = false;
  contacts: any = [
  
    {
      name: 'Thomas',
      email: 'peaky@gmail.com',
      phoneNumber: '9678915784',
      baseUrl:"../assets/peak1.jpeg",
    },

    {
      name: 'Walter White',
      email: 'walter@gmail.com',
      phoneNumber: '9678915784',
      baseUrl:"../assets/walter.jpg",
    },


    {
      name: 'Lucifer',
      email: 'Lucifer@gmail.com',
      phoneNumber: '9752124509',
      baseUrl:"../assets/luci.jpg",
    },
    {
      name: 'professor',
      email: 'professor@gmail.com',
      phoneNumber: '9678915784',
      baseUrl:"../assets/finalprof.jpg",
    },
  ]
  addcontacts() {
    let x: any =
    {
      name: this.name,
      email: this.email,
      phoneNumber: this.phno,
      baseUrl: this.baseUrl,
    }
      ;
    this.contacts.push(x);
    console.log(this.contacts);
    this.isDialogOpen=false;
    this.name=null;
    this.email=null;
    this.phno=null;
    this.baseUrl=null;
  }

  onFileSelected(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event1: any) => {
        console.log(event1, "event1");
        this.baseUrl = event1.target.result;
        console.log('vals', this.baseUrl);
      }
    }
  
  }
  openAddContact() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
    }
    else {
      this.isDialogOpen = false;
    }

  }

}

