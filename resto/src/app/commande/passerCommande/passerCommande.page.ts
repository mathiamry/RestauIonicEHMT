import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CommandeService } from "../../service/commande.service";
import { Router } from "@angular/router";
import { UtilsService } from "../../utils.service";


@Component({
  selector: "app-passerCommande",
  templateUrl: "./passerCommande.page.html",
  styleUrls: ["./passerCommande.page.scss"]
})
export class PasserCommandePage implements OnInit {
  postCommandeForm: FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private service: CommandeService,
    
    private route: Router,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.postCommandeForm = this.formBuilder.group({
      nom: [
        null,
        [Validators.required, Validators.minLength(3), Validators.required]
      ],
      nameEmp: [
        null,
        [Validators.required, Validators.minLength(3), Validators.required]
      ],
      
      tel: [null, [Validators.required]],
      
      
    });
    
  }
  postCommande(commandeInfo: any) {
    this.service.postCommande(commandeInfo).subscribe(
      data => {
        this.utils.presentToast("Commande validée", "success");
        window.location.reload();
      },
      error => {
        this.utils.presentToast("erreur", "danger");
      }
    );
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;
}
