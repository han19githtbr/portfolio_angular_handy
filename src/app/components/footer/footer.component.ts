import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Portfolio } from 'src/app/model/portfolio.model';
import { MessageService } from 'src/app/services/message.service';
//import * as swal from 'sweetalert';
import Swal from 'sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  form!: FormGroup;

  portfolio: Portfolio = new Portfolio();

  constructor(private fb: FormBuilder ,public _MessageService: MessageService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(255)]],
        email: ['', [Validators.required, Validators.maxLength(255)]],
        subject: ['', [Validators.required, Validators.maxLength(255)]],
        message: ['', [Validators.required]],
    });
  }

  contactForm(form: any) {
    /*this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire("Formulário de contato", "Mensagem enviada corretamente", 'success');
    }, error => {
      console.error('Erro ao enviar mensagem:', error);
    });*/
    console.log(this.portfolio);
    this._MessageService.saveMessage(this.portfolio).subscribe((response: any) => {
      if (response.body.success) {
        Swal.fire("Formulário de contato", "Mensagem enviada corretamente", 'success');
        this.form.reset();
      }

    });
  }
}
