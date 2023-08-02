import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import VisibilityIcon from '@mui/icons-material/Visibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('myForm') theForm : NgForm;

  subscriptions = ["Basic", "Advanced", "Pro"]
  hide = true;
  submitted = false;

  formDatas = {
    email : '',
    subscriptionType : this.subscriptions[1],
    password:'',
  }
 

  onSubmit(){
    console.log('my form', this.theForm)
    this.formDatas.email = this.theForm.value.email;
    this.formDatas.subscriptionType = this.theForm.value.subscription == undefined ? 'Advanced' : this.theForm.value.subscription;
    this.formDatas.password = this.theForm.value.password;
    console.log('my email', this.formDatas.email,
      'my subscription type', this.formDatas.subscriptionType,
      'my password', this.formDatas.password
    );

    this.submitted = true;
  }
}
