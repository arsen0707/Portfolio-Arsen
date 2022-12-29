import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  @ViewChild('myForm') myForm!:ElementRef;
  @ViewChild('nameField') nameField!:ElementRef;
  @ViewChild('message') message!:ElementRef ;
  @ViewChild('sendButton') sendButton!:ElementRef ;
  
  constructor() { }

  ngOnInit(): void {

    
   
  }

  async sendMail(){

    console.log('sending mail', this.myForm);

    let nameField = this.nameField.nativeElement;
    let message = this.message.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled=true;
    message.disabled=true;
    sendButton.disabled=true;


    let formData = new FormData();
    formData.append ('name',nameField.value);
    formData.append ('message',message.value)
    await fetch('https://arsen-tasha.developerakademie.net/send_mail/send_mail.php',
    
    {
      method:'POST',
      body:formData
    }
    
    );


    nameField.disabled=false;
    message.disabled=false;
    sendButton.disabled=false;
    
  }
}
