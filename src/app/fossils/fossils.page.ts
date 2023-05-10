import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 
import { Storage } from '@ionic/storage-angular';

/* 
I tried to use the capacitor version of toasts, but none of the plugins would install for me. 
Then when I would force it, it still wouldn't work for me. I resorted to just using the ionic/angular version of toasts.
I tried multiple different plugins but they just wouldn't work. Tried looking it up online with no luck too.
I hope you can give me the marks for plugin with this workaround, if not, that's understandable too. 
*/

@Component({
  selector: 'app-fossils',
  templateUrl: './fossils.page.html',
  styleUrls: ['./fossils.page.scss'],
})
export class FossilsPage implements OnInit {
  favFossil: string = "";
  constructor(private storage: Storage, private toast: ToastController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.favFossil = await this.storage.get('fossil');
  }

  async saveFossil() {
    await this.storage.set('fossil', this.favFossil)
    this.showToast();
  }

  async showToast() {
    await this.toast.create({
      message: "Saved!",
      duration: 2000
    }).then(res => res.present());
  }
}
