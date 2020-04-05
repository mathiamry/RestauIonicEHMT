import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../Models/plat';
import {PlatService} from '../service/plat.service';
import { ToastController } from '@ionic/angular';
import { CommandeService } from "../service/commande.service";

@Component({
  selector: 'app-commande',
  templateUrl: 'commande.page.html',
  styleUrls: ['commande.page.scss']
})
export class CommandePage {
 
  plats : Plat [];
  constructor(private route : Router, private service: PlatService, private toast : ToastController) {
    this.getPlats();

  }

  async presentToast(message: string,  color: string) {
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      color: color,
      duration: 2000
    });
    toast.present();
  }

  

  getPlats():void 
  {
    this.service.getPlats().subscribe(plats =>{
        this.plats = plats;
    }, 
    error=>
    { 
      this.presentToast('Erreur survenue','danger');


    });
  }
  }
