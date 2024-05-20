import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private formBuilder: FormBuilder = inject (FormBuilder);
  protected form : FormGroup;

 constructor(){
  this.form = this.buildForm;

}

get buildForm(): FormGroup{
  return this.form = this.formBuilder.group({ 
    name: ['juan', [Validators.required, Validators.minLength(3)]],
    email: ['example@gmail.com', [Validators.required]],
    message: ['', [Validators.required,]],

  })
}

  validarForm2(): void{
   if (this.form.get("name")?.valid){
      alert("nombre valido")
   }else {
    alert("nombre no valido")
   }if (this.form.get("email")?.valid){
    alert("correo valido")
   }else{ 
    alert("correo no valido")
   }
   if (this.form.get("message")?.valid){
    alert("mensaje valido")
  }else{
    alert("mensaje no valido")
  }
}
}
