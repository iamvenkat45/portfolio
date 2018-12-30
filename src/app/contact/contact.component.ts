import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { ContactService } from "./contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  contactForm;
  displaySuccessMessage: boolean;
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required)
    });
  }

  get form() { return this.contactForm.controls; }

  onFormSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).subscribe(data => {
        this.contactForm.reset();
        this.displaySuccessMessage = true;
        setTimeout(()=> {
          this.displaySuccessMessage = false;
        }, 1000)
      });
    }
  }
}
