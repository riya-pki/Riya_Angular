import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RtmService } from './rtm.service';
// import * as $ from "jquery";
import 'jqueryui'
// import { TinyMCE } from 'tinymce';
declare var tinymce: any;
// declare var datepicker: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  file: File;
  blob: Blob;
  stringifiedData: any;  
  public colors: string[] = ["Purple", "Blue"];
  selectedTempcolor = "Purple";
  public assayTypes: string[] = ["Select from the list of Assay Types", "120", "121", "123",
  "268", "326", "Refresh Token"];
  selectedAssaytype = "Select from the list of Assay Types";
  public clientNames: string[] = ["Select Clients", "Oriental_Medical_Clinic", "HealthiansLab", "Suburban", "SRLDiagnostics",
  "ThyrocareMumbai", "BeckmanCoulter", "Johnson", "Vista_Clinic", "clinvar", "Medline"];
  selectedClientname = "Select Clients";
  title = 'rtm-demo';
  // rtmForm: FormGroup;
  addreportForm: FormGroup;
  addrtmtitleForm: FormGroup;
  submitted = false;
  config: { templetname: string; testCode: string; clientname: string; };
  responseOne: Object;
  res: any;
 
  constructor(
    private rtmService: RtmService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.createFormOne();
    // this.createFormTwo();
  }
 
  ngOnInit() {

    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: 'div.input-tinyMCE200',
      inline:true,
      height: 110,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists', 'wordcount', 'visualchars',
      ],
      toolbar:
        ' bold italic underline superscript subscript | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        '| fontfamily fontsize  undo',
      content_style: "body { font-size: 11pt;font-family: Arial; }",
      // font_family_formats: "Lucida Sans Unicode",
      font_size_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
      setup: function (editor) {
        var max = 200;
        editor.on('paste keyup keypress change', function (event) {
          var numChars = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
          console.log('Pasted', numChars, '--', max);
          if (numChars > max) {
            var cnt = tinymce.activeEditor.getContent();
            tinymce.activeEditor.setContent(cnt.substring(0, max + 3));
            // alert("Only a maximum " + max + " characters are allowed.");
            tinymce.activeEditor.selection.select(tinymce.activeEditor.getBody(), true);
            tinymce.activeEditor.selection.collapse(false);
          }
        });

      }
    });

    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: '.input-tinyMCE25',
      inline:true,
      height: 110,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists', 'wordcount', 'visualchars',
      ],
      toolbar:
        ' bold italic underline superscript subscript | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        '| fontfamily fontsize undo',
      content_style: "body { font-size: 11pt;font-family: Arial; }",
      font_size_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
      setup: function (editor) {
        var max = 25;
        editor.on('paste keyup keypress change', function (event) {
          var numChars = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
          console.log('Pasted', numChars, '--', max);
          if (numChars > max) {
            var cnt = tinymce.activeEditor.getContent();
            tinymce.activeEditor.setContent(cnt.substring(0, max + 3));
            // alert("Only a maximum " + max + " characters are allowed.");
            tinymce.activeEditor.selection.select(tinymce.activeEditor.getBody(), true);
            tinymce.activeEditor.selection.collapse(false);
          }
        });

      }
    });
    var max = 100;
    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: '.input-tinyMCE100',
      inline:true,
      height: 110,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists', 'wordcount', 'visualchars',
      ],
      toolbar:
        ' bold italic underline superscript subscript | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        '| fontfamily fontsize  undo',
      content_style: "body { font-size: 11pt;font-family: Arial; }",
      font_size_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
      paste_as_text: true,
      paste_preprocess: function(plugin, args) {
        args.content = args.content.substring(0, max);
      },
      setup: function (editor) {
        // var max = 100;
        editor.on('keypress paste', function(e) {
        // editor.on('paste keyup keypress change', function (event) {
          var numChars = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
          var withhtml = tinymce.activeEditor.getContent({ format: "html" });
          var withouthtml = tinymce.activeEditor.getContent({ format: "text" });
          var val = withhtml.length - withouthtml.length;
          var characters = withhtml.substring(0, (max + val));
          if(numChars >= max)  {
            e.preventDefault();
            return false;
          }
          // console.log('Pasted', numChars, '--', max);
          // if (numChars > max) {
          //   var cnt = tinymce.activeEditor.getContent();
          //   tinymce.activeEditor.setContent(cnt.substring(0, max + 3));
          //   alert("Only a maximum " + max + " characters are allowed.");
          //   tinymce.activeEditor.selection.select(tinymce.activeEditor.getBody(), true);
          //   tinymce.activeEditor.selection.collapse(false);
          // }
        });

      }
    });



    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: '.input-tinyMCE',
      inline: true,
      height: 110,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists',
      ],
      toolbar:
        ' bold italic underline superscript subscript | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        '| fontfamily fontsize undo',
      content_style: "body { font-size: 11pt;font-family: Arial; }",
      font_size_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 28pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
      
    });

    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      selector: '.textarea-tinyMCE1000',
      inline: true,
      mode : "none",
      height: 200,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
        'lists','wordcount','visualchars',
      ],
      toolbar:
        'bold italic underline superscript subscript | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist | ' +
        '| fontfamily fontsize undo',
      content_style: 
      `
      .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
        margin-left:12px
      }
      "body { font-size: 11pt;font-family: Arial; }"
    `,
      // "body { font-size: 11pt;font-family: Arial; }",
      font_size_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 28pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
      setup: function (editor) {
        var max = 1000;
        editor.on('paste keyup keypress change', function (event) {
          var numChars = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
          console.log('Pasted', numChars, '--', max);
          if (numChars > max) {
            var cnt = tinymce.activeEditor.getContent();
            tinymce.activeEditor.setContent(cnt.substring(0, max + 3));
            alert("Only a maximum " + max + " characters are allowed.");
            tinymce.activeEditor.selection.select(tinymce.activeEditor.getBody(), true);
            tinymce.activeEditor.selection.collapse(false);
          }
        });

      }
    });

    tinymce.init({
      selector: 'textarea.tinyMCE',
      height: 110,
      branding: false,
      menubar: false,
      statusbar: false,
      plugins: [
          'lists',
      ],
      toolbar:
          'bold italic underline superscript subscript | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist | ' +
          '| fontfamily fontsize undo',
      content_style: "body { font-size: 11pt;font-family: Arial; }",
      font_size_formats:
          "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 28pt 30pt 36pt 48pt 60pt 72pt 96pt",
      promotion: false,
  });
  }

  createFormOne() {
    this.addreportForm = this.fb.group({
      templetname: ['', [Validators.required, Validators.maxLength(200)]],
      testCode: ['', [Validators.required, Validators.maxLength(200)]],
      clientname: ['', Validators.required],
      assayname: ['', Validators.required],
      flyer: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      right_logo_1: ['', Validators.required],
      rihgt_Logo_2: ['', Validators.required],
      left_Logo_1: ['', Validators.required],
      left_Logo_2: ['', Validators.required],
      color: ['', Validators.required],
      title:['', Validators.required],
      patientname:['', Validators.required],
      patientdob:['', Validators.required],
      patientsex:['', Validators.required],
      patientaccession:['', Validators.required],
      patientcrossref:['', Validators.required],
      specimentype:[''],
      specimenreceive:[''],
      specimencollection:[''],
      specimenreport:[''],
      testperformed:['', Validators.required],
      rfr:['', Validators.required],
      notes:['', Validators.required],
      geneinfo:['', Validators.required],
      methods:['', Validators.required],
      genetested:['', Validators.required],
      variantpresent:['', Validators.required],
      dominant:['', Validators.required],
      recessive:['', Validators.required],
      xlinked:['', Validators.required],
      novariant:['', Validators.required],
      footer:['', Validators.required],
      client_name:['', Validators.required],
      clienthospital:['', Validators.required],
      clientmail:['', Validators.required],
      clientphone:['', Validators.required],
      clientfax:['', Validators.required],
      rsBeforeResults:[''],
      rsC_SNV_Pathogenic:[''],
      rcS_SNV_Reduced_Penetrance:[''],
      rsC_SNV_Likely:[''],
      rsC_SNV_Risk_Allele:[''],
      rsC_SNV_Uncertain:[''],
      rsC_SNV_Likely_Benign:[''],
      rsC_SNV_Benign:[''],
      rsC_SNV_Pseudodeficiency:[''],
      rsC_SNV_Other:[''],
      rsC_SNV_No:[''],
      rsC_CNV_Pathogenic:[''],
      rsC_CNV_Likely:[''],
      rsC_CNV_Uncertain:[''],
      rsC_CNV_Reportable_AOH:[''],
      rsC_CNV_Likely_Benign:[''],
      rsC_CNV_Benign:[''],
      rsC_CNV_No:[''],
      rsC_CNV_Default:[''],
      rsC_After_Results_Summary:[''],
      phenotypic_terms_applied:[''],
      df_textbeforeresult:[''],
      df_snv_classification:[''],
      df_snv_gene:[''],
      df_snv_exonintron:[''],
      df_snv_dnachange:[''],
      df_snv_proteinchange:[''],
      df_snv_zygosity:[''],
      df_snv_inheritance:[''],
      df_snv_omim:[''],
      df_snv_associateddisease:[''],
      df_snv_textfornovariant:[''],
      df_cnv_classification:[''],
      df_cnv_event:[''],
      df_cnv_cytobandgene:[''],
      df_cnv_genomiclocation:[''],
      df_cnv_size_bp:[''],
      df_cnv_omim:[''],
      df_cnv_associateddisease:[''],
      df_cnv_textfornovariant:[''],
      df_cnv_defaulttext:[''],
      df_textafterresult:[''],
      fshd_textbeforeresult:[''],
      fshd_textafterresult:[''],
      fragilex_textbeforeresult:[''],
      fragilex_textafterresult:[''],
      ra_textbeforeresult:[''],
      ra_textafterresult:[''],
      sma_textbeforeresult:[''],
      sma_textafterresult:[''],
      mlpa_textbeforeresult:[''],
      mlpa_textafterresult:[''],
      pgd_textbeforeresult:[''],
      pgd_textafterresult:['']
    });
  }

  get addreportFormControl() {
    return this.addreportForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addreportForm.value)
    let addreportbody = JSON.stringify(this.addreportForm.value);
    console.log(addreportbody)
    this.rtmService.add(addreportbody).subscribe((addtemp:any) => {
      console.log(addtemp)
      this.responseOne = addtemp.responseData;
      const responseId:any = this.responseOne;
      console.log(this.responseOne)
      console.log(responseId)
      let patientname = this.addreportForm.controls.patientname.value;
      let patientdob = this.addreportForm.controls.patientdob.value;
      let patientsex = this.addreportForm.controls.patientsex.value;
      let patientaccession = this.addreportForm.controls.patientaccession.value;
      let patientcrossref = this.addreportForm.controls.patientcrossref.value;
      let specimentype = this.addreportForm.controls.specimentype.value;
      let specimenreceive = this.addreportForm.controls.specimenreceive.value;
      let specimencollection = this.addreportForm.controls.specimencollection.value;
      let specimenreport = this.addreportForm.controls.specimenreport.value;
      let client_name = this.addreportForm.controls.client_name.value;
      let clienthospital = this.addreportForm.controls.clienthospital.value;
      let clientmail = this.addreportForm.controls.clientmail.value;
      let clientphone = this.addreportForm.controls.clientphone.value;
      let clientfax = this.addreportForm.controls.clientfax.value;
      let addDetailsbody = JSON.stringify({'templeate_id': responseId, 'pD_name': patientname, 'pD_DOB': patientdob,
      'pD_Sex': patientsex, 'pD_Accession_ID': patientaccession, 'pD_Cross_Reference': patientcrossref, 'sD_Specimen_Type': specimentype,
      'sD_Receive_Date': specimenreceive, 'sD_Collection_Date': specimencollection, 'sD_Report_Date': specimenreport,
      'cD_Name': client_name, 'cD_hospital': clienthospital, 'cD_Mailing_Address': clientmail, 'cD_Phone_Number': clientphone,
      'cD_Fax': clientfax});
      this.rtmService.addDetails(addDetailsbody).subscribe(addDetails => {
        console.log(addDetails)
      })

      let title =  this.addreportForm.controls.title.value;
      let testperformed = this.addreportForm.controls.testperformed.value;
      let rfr = this.addreportForm.controls.rfr.value;
      let notes = this.addreportForm.controls.notes.value;
      let geneinfo = this.addreportForm.controls.geneinfo.value;
      let methods = this.addreportForm.controls.methods.value;
      let genetested = this.addreportForm.controls.genetested.value;
      let variantpresent = this.addreportForm.controls.variantpresent.value;
      let dominant = this.addreportForm.controls.dominant.value;
      let recessive = this.addreportForm.controls.recessive.value;
      let xlinked = this.addreportForm.controls.xlinked.value;
      let novariant = this.addreportForm.controls.novariant.value;
      let footer = this.addreportForm.controls.footer.value;
      let addTitlebody = JSON.stringify({'templeate_id': responseId, 'title': title, 'tP_test':testperformed, 
      'rfR_Reason_for_Referral': rfr, 'n_Note': notes, 'gene_Information': geneinfo, 'methods_Limitations': methods, 'gene_Tested' : genetested, 'fI_Variant_present': variantpresent, 'fI_Dominan': dominant,
      'fI_Recessive': recessive, 'fI_X_Linked': xlinked, 'fI_no_Variant': novariant,
      'footer': footer});
      // let response = JSON.stringify('templeate_id', responseId);
        this.rtmService.addTitle(addTitlebody).subscribe(addTitle => {
          console.log(addTitle)
        })
        let rsBeforeResults = this.addreportForm.controls.rsBeforeResults.value;
        let rsC_SNV_Pathogenic = this.addreportForm.controls.rsC_SNV_Pathogenic.value;
        let rcS_SNV_Reduced_Penetrance = this.addreportForm.controls.rcS_SNV_Reduced_Penetrance.value;
        let rsC_SNV_Likely = this.addreportForm.controls.rsC_SNV_Likely.value;
        let rsC_SNV_Risk_Allele = this.addreportForm.controls.rsC_SNV_Risk_Allele.value;
        let rsC_SNV_Uncertain = this.addreportForm.controls.rsC_SNV_Uncertain.value;
        let rsC_SNV_Likely_Benign = this.addreportForm.controls.rsC_SNV_Likely_Benign.value;
        let rsC_SNV_Benign = this.addreportForm.controls.rsC_SNV_Benign.value;
        let rsC_SNV_Pseudodeficiency = this.addreportForm.controls.rsC_SNV_Pseudodeficiency.value;
        let rsC_SNV_Other = this.addreportForm.controls.rsC_SNV_Other.value;
        let rsC_SNV_No = this.addreportForm.controls.rsC_SNV_No.value;
        let addRSSnvbody = JSON.stringify({'templeate_id': responseId, 'rsC_Before_Results_Summary': rsBeforeResults, 'rsC_SNV_Pathogenic':rsC_SNV_Pathogenic, 
        'rcS_SNV_Reduced_Penetrance': rcS_SNV_Reduced_Penetrance, 'rsC_SNV_Likely': rsC_SNV_Likely, 'rsC_SNV_Risk_Allele':rsC_SNV_Risk_Allele,
        'rsC_SNV_Uncertain': rsC_SNV_Uncertain, 'rsC_SNV_Likely_Benign': rsC_SNV_Likely_Benign, 'rsC_SNV_Benign':rsC_SNV_Benign,
        'rsC_SNV_Pseudodeficiency': rsC_SNV_Pseudodeficiency, 'rsC_SNV_Other': rsC_SNV_Other, 'rsC_SNV_No': rsC_SNV_No});
        this.rtmService.addRSSnv(addRSSnvbody).subscribe(addRSSnv => {
          console.log(addRSSnv)
        })

        
        let rsC_CNV_Pathogenic = this.addreportForm.controls.rsC_CNV_Pathogenic.value;
        let rsC_CNV_Likely = this.addreportForm.controls.rsC_CNV_Likely.value;
        let rsC_CNV_Uncertain = this.addreportForm.controls.rsC_CNV_Uncertain.value;
        let rsC_CNV_Reportable_AOH = this.addreportForm.controls.rsC_CNV_Reportable_AOH.value;
        let rsC_CNV_Likely_Benign = this.addreportForm.controls.rsC_CNV_Likely_Benign.value;
        let rsC_CNV_Benign = this.addreportForm.controls.rsC_CNV_Benign.value;
        let rsC_CNV_No = this.addreportForm.controls.rsC_CNV_No.value;
        let rsC_CNV_Default = this.addreportForm.controls.rsC_CNV_Default.value;
        let rsC_After_Results_Summary = this.addreportForm.controls.rsC_After_Results_Summary.value;
        let phenotypic_terms_applied = this.addreportForm.controls.phenotypic_terms_applied.value;
        let addRSCnvbody = JSON.stringify({'templeate_id': responseId, 'rsC_CNV_Pathogenic':rsC_CNV_Pathogenic, 
        'rsC_CNV_Likely': rsC_CNV_Likely, 'rsC_CNV_Uncertain': rsC_CNV_Uncertain, 'rsC_CNV_Reportable_AOH':rsC_CNV_Reportable_AOH,
        'rsC_CNV_Likely_Benign': rsC_CNV_Likely_Benign, 'rsC_CNV_Benign':rsC_CNV_Benign,
        'rsC_CNV_No': rsC_CNV_No, 'rsC_CNV_Default': rsC_CNV_Default, 'rsC_After_Results_Summary': rsC_After_Results_Summary,
        'phenotypic_terms_applied': phenotypic_terms_applied});
        this.rtmService.addRSCnv(addRSCnvbody).subscribe(addRSCnv => {
          console.log(addRSCnv)
        })

        let df_textbeforeresult = this.addreportForm.controls.df_textbeforeresult.value;
        let df_snv_classification = this.addreportForm.controls.df_snv_classification.value;
        let df_snv_gene = this.addreportForm.controls.df_snv_gene.value;
        let df_snv_exonintron = this.addreportForm.controls.df_snv_exonintron.value;
        let df_snv_dnachange = this.addreportForm.controls.df_snv_dnachange.value;
        let df_snv_proteinchange = this.addreportForm.controls.df_snv_proteinchange.value;
        let df_snv_zygosity = this.addreportForm.controls.df_snv_zygosity.value;
        let df_snv_inheritance = this.addreportForm.controls.df_snv_inheritance.value;
        let df_snv_omim = this.addreportForm.controls.df_snv_omim.value;
        let df_snv_associateddisease = this.addreportForm.controls.df_snv_associateddisease.value;
        let df_snv_textfornovariant = this.addreportForm.controls.df_snv_textfornovariant.value;
        let df_cnv_classification = this.addreportForm.controls.df_cnv_classification.value;
        let df_cnv_event = this.addreportForm.controls.df_cnv_event.value;
        let df_cnv_cytobandgene = this.addreportForm.controls.df_cnv_cytobandgene.value;
        let df_cnv_genomiclocation = this.addreportForm.controls.df_cnv_genomiclocation.value;
        let df_cnv_size_bp = this.addreportForm.controls.df_cnv_size_bp.value;
        let df_cnv_omim = this.addreportForm.controls.df_cnv_omim.value;
        let df_cnv_associateddisease = this.addreportForm.controls.df_cnv_associateddisease.value;
        let df_cnv_textfornovariant = this.addreportForm.controls.df_cnv_textfornovariant.value;
        let df_cnv_defaulttext = this.addreportForm.controls.df_cnv_defaulttext.value;
        let df_textafterresult = this.addreportForm.controls.df_textafterresult.value;
        let fshd_textbeforeresult = this.addreportForm.controls.fshd_textbeforeresult.value;
        let fshd_textafterresult = this.addreportForm.controls.fshd_textafterresult.value;
        let fragilex_textbeforeresult = this.addreportForm.controls.fragilex_textbeforeresult.value;
        let fragilex_textafterresult = this.addreportForm.controls.fragilex_textafterresult.value;
        let ra_textbeforeresult = this.addreportForm.controls.ra_textbeforeresult.value;
        let ra_textafterresult = this.addreportForm.controls.ra_textafterresult.value;
        let sma_textbeforeresult = this.addreportForm.controls.sma_textbeforeresult.value;
        let sma_textafterresult = this.addreportForm.controls.sma_textafterresult.value;
        let mlpa_textbeforeresult = this.addreportForm.controls.mlpa_textbeforeresult.value;
        let mlpa_textafterresult = this.addreportForm.controls.mlpa_textafterresult.value;
        let pgd_textbeforeresult = this.addreportForm.controls.pgd_textbeforeresult.value;
        let pgd_textafterresult = this.addreportForm.controls.pgd_textafterresult.value;
        let addDf_pgdbody = JSON.stringify({'templeate_id': responseId, 'df_textbeforeresult':df_textbeforeresult, 
        'df_snv_classification': df_snv_classification, 'df_snv_gene': df_snv_gene, 'df_snv_exonintron': df_snv_exonintron,
        'df_snv_dnachange': df_snv_dnachange, 'df_snv_proteinchange': df_snv_proteinchange, 'df_snv_zygosity': df_snv_zygosity,
        'df_snv_inheritance': df_snv_inheritance, 'df_snv_omim': df_snv_omim, 'df_snv_associateddisease': df_snv_associateddisease,
        'df_snv_textfornovariant': df_snv_textfornovariant, 'df_cnv_classification': df_cnv_classification,
        'df_cnv_event': df_cnv_event, 'df_cnv_cytobandgene': df_cnv_cytobandgene, 'df_cnv_genomiclocation': df_cnv_genomiclocation,
        'df_cnv_size_bp': df_cnv_size_bp, 'df_cnv_omim': df_cnv_omim, 'df_cnv_associateddisease': df_cnv_associateddisease,
        'df_cnv_textfornovariant': df_cnv_textfornovariant, 'df_cnv_defaulttext':df_cnv_defaulttext, 'df_textafterresult': df_textafterresult,
        'fshd_textbeforeresult': fshd_textbeforeresult, 'fshd_textafterresult': fshd_textafterresult, 'fragilex_textbeforeresult': fragilex_textbeforeresult,
        'fragilex_textafterresult': fragilex_textafterresult, 'ra_textbeforeresult': ra_textbeforeresult, 'ra_textafterresult':ra_textafterresult,
        'sma_textbeforeresult': sma_textbeforeresult, 'sma_textafterresult': sma_textafterresult, 'mlpa_textbeforeresult':mlpa_textbeforeresult,
        'mlpa_textafterresult': mlpa_textafterresult, 'pgd_textbeforeresult' : pgd_textbeforeresult, 'pgd_textafterresult':pgd_textafterresult });
        this.rtmService.addDf_pgd(addDf_pgdbody).subscribe(addRSCnv => {
          console.log(addRSCnv)
        })

      });
  }
}
