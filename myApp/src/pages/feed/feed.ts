import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
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

  public lista_filmes = new Array<any>();
  public loader;

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.abreCarregando();
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        this.fechaCarregando();
      }, error =>{
        console.log(error);
        this.fechaCarregando();
      }
    );

    this.movieProvider.getPoupular().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error =>{
        console.log(error);
      }
    )
  }

}
