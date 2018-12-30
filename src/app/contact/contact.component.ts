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
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required)
    });
  }

  onFormSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).subscribe(data => {
        this.contactForm.reset();
        console.log(data);
      });
    }
  }
}
