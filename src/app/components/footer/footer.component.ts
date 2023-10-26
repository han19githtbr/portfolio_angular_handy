import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public _MessageService: MessageService) {

  }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire("Formulário de contato", "Mensagem enviada corretamente", 'success');
    });
  }
}
