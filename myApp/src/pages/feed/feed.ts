import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed ={
    titulo:"Fabim Beleza",
    data: "November 7, 1990",
    descricao:"Blezera pura",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h ago"
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10 , 99);
  }

}
