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
  disableCv: boolean = false;
  showProgressBar: boolean = false;

  contentMessageErro: string;
  contentMessageSuccess: string;

  value:string = "/assets/img/MAR.jpg";
  status: boolean = false;

  statusDownload: boolean = false;

  //botaoCurriculoData: any;
  //valueCvIngles:string = "/assets/img/CV_HANDY_ATUAL.en.pdf";
  //valueCvPortugues:string = "/assets/img/CV_HANDY_ATUAL.fr.pdf";
  //valueCvFrances:string = "/assets/img/CV_HANDY_ATUAL.pt-br.pdf";

  curriculumData: any;
  botaoCVData:any;
  apresentacaoData: any = {};
  formacaoData: any = {};
  bootcampsData: any = {};
  experienciaData: any = {};
  projetoData: any = {};
  contatoData: any = {};
  competenciaData: any = {};
  DemoIndisponivelData: any;

  isActive: boolean = false;
  isDisabled = true;

  id: number;

  private caminhoCV: string;
  idioma: string;

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

    this.idioma = 'pt-br';

    this.translate.get('HOME.curriculum').subscribe(data => {
      this.curriculumData = data;
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

    this.id = 2;

    this.messageService.pegarFoto(this.id).subscribe(data => {
      this.value = data.body.path;
    })
  }

  trocarFotoPerfil() {
    this.status = !this.status;
    if(this.status){
      this.portfolio.path = '/assets/img/open_to_work.png';
    } else{
      this.portfolio.path = '/assets/img/MAR.jpg';
    }
    //this.portfolio.picture = this.status ? '/assets/img/open_to_work.png' : '/assets/img/MAR.jpg';
    this.messageService.savePicture(this.portfolio).subscribe(data => {
      console.log(data);
      this.value = data.body.path;
      this.portfolio.path = null;
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
      this.messageService.saveMessage(this.portfolio).subscribe((response: any) => {
        if (response.body.success) {
          Swal.fire("Message sent", 'success');
          this.form.reset();
        } else {
          this.contentMessageErro = 'HOME.form.ErroAoEnviarEmail';
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

    this.translate.get('HOME.curriculum').subscribe(data => {
      this.curriculumData = data;
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
    this.idioma = idioma;
    this.caminhoCV = null;
    this.translate.use(idioma);
    this.updateTranslatedData();
  }


  obterCaminhoCurriculo(): void {
    const uniqueParam = new Date().getTime().toString();
    this.disableCv = true;
    this.messageService.downloadCurriculo(this.idioma, uniqueParam)
      .subscribe(
        (response: any) => {
          // Crie uma blob com os dados recebidos
          const blob = new Blob([response], { type: 'application/pdf' });

          // Crie uma URL para o blob e defina-a como o caminho do currículo
          this.caminhoCV = URL.createObjectURL(blob);
        },
        (error) => {
          // Lide com erros, por exemplo, definindo um valor padrão para o caminho do currículo
          console.error('Erro ao obter o caminho do currículo:', error);
          this.caminhoCV = 'URL_DO_SEU_CURRICULO_PDF';
        }
      );
  }

  onDownloadClick() {
    this.obterCaminhoCurriculo();

    // Aguarda até que a URL do currículo seja obtida
    const intervalId = setInterval(() => {
      if (this.caminhoCV) {
        // Para o intervalo assim que a URL estiver disponível
        clearInterval(intervalId);
        this.disableCv = false;

        // Cria um link temporário para download
        const downloadLink = this.createDownloadLink();

        // Adiciona o link ao corpo do documento
        document.body.appendChild(downloadLink);

        // Dispara o clique no link para iniciar o download
        downloadLink.click();

        // Remove o link do corpo do documento após o download iniciar
        document.body.removeChild(downloadLink);
      }
    }, 500); // Intervalo de verificação de 500 milissegundos
  }

  // Cria dinamicamente um link para download
  createDownloadLink() {
    const link = document.createElement('a');
    link.href = this.caminhoCV;
    link.download = `handy_${this.idioma}.pdf`; // Define o nome do arquivo para download
    link.target = '_blank';
    return link;
  }

}
