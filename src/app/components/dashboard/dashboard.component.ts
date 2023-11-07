import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Portfolio } from 'src/app/model/portfolio.model';
import { MessageService } from 'src/app/services/message.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  form!: FormGroup;
  formSelect!: FormGroup;

  portfolio: Portfolio = new Portfolio();

  mostrarMensagemErro: boolean = false;
  disableBox: boolean = false;
  showProgressBar: boolean = false;

  contentMessageErro: string;
  contentMessageSuccess: string;

  apresentacaoData: any = {};
  formacaoData: any = {};
  bootcampsData: any = {};
  experienciaData: any = {};
  projetoData: any = {};
  contatoData: any = {};
  competenciaData: any = {};

  isActive: boolean = false;

  constructor(private fb: FormBuilder, public translate: TranslateService,
    private messageService: MessageService,){
      translate.addLangs(['en', 'fr', 'pt-br']);
      translate.setDefaultLang('pt-br');
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.maxLength(255)]],
      subject: ['', [Validators.required, Validators.maxLength(255)]],
      message: ['', [Validators.required]],
    });

    this.formSelect = this.fb.group({
      idioma: ['pt-br'],
    });

    this.translate.get('HOME.presentation').subscribe(data => {
      this.apresentacaoData = data;
    });

    this.translate.get('HOME.formation').subscribe(data => {
      this.formacaoData = data;
    });

    this.translate.get('HOME.treinamentos').subscribe(data => {
      this.bootcampsData = data;
    });

    this.translate.get('HOME.experience').subscribe(data => {
      this.experienciaData = data;
    });

    this.translate.get('HOME.projets').subscribe(data => {
      this.projetoData = data;
    });
    this.translate.get('HOME.competence').subscribe(data => {
      this.competenciaData = data;
    });
    this.translate.get('HOME.contato').subscribe(data => {
      this.contatoData = data;
    });
  }


  submit(form: any) {
    this.disableBox = true;
    if (form.invalid) {
      //this.mostrarMensagemErro = true;
      this.contentMessageErro = 'HOME.form.CamposObrigatorios';
      this.disableBox = false;
    } else {
      this.showProgressBar = true;

      //console.log(this.portfolio);
      this.messageService.saveMessage(this.portfolio).subscribe((response: any) => {
        if (response.body.success) {
          Swal.fire("Formulário de contato", "Mensagem enviada corretamente", 'success');
          this.form.reset();
        } else {
          this.contentMessageErro = 'HOME.form.FormularioEnviadoComSucesso';
        }
        this.disableBox = false;
        this.showProgressBar = false;
      });
    }
  }


  onLanguageChange(selectedLang: string) {
    this.translate.use(selectedLang);
    this.updateTranslatedData();
  }


  updateTranslatedData() {
    this.translate.get('HOME.presentation').subscribe(data => {
      this.apresentacaoData = data;
    });

    this.translate.get('HOME.formation').subscribe(data => {
      this.formacaoData = data;
    });

    this.translate.get('HOME.treinamentos').subscribe(data => {
      this.bootcampsData = data;
    });

    this.translate.get('HOME.projets').subscribe(data => {
      this.projetoData = data;
    });

    this.translate.get('HOME.experience').subscribe(data => {
      this.experienciaData = data;
    });

    this.translate.get('HOME.competence').subscribe(data => {
      this.competenciaData = data;
    });

    this.translate.get('HOME.contato').subscribe(data => {
      this.contatoData = data;
    });
  }

  onLanguage(){
    let idioma = this.formSelect.controls['idioma'].value;
    this.translate.use(idioma);
    this.updateTranslatedData();
  }
}
