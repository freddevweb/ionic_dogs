import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage({
	name:'slider',
	segment: "slider"
})
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

	public breed: {name:string , hasSubs: boolean};
	public subBreed: {breedName:string , subBreedName: string};

	public breedImgs: string[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProv: ApiProvider) {

		if( this.navParams.get("breed") ){
			this.breed = this.navParams.get('breed');

		}
		else if( this.navParams.get("subBreed") ){
			this.subBreed = this.navParams.get("subBreed");
		}
	}

	ionViewCanEnter () {
		this.breedImgs = [];

		if( this.breed ){

			this.getBreedImages();
			
		}
		if( this.subBreed ) {

			this.getSubBreedImg();
		}

	}

	getBreedImages(): Promise <any>{
		
		return new Promise((resolve, reject) => {
			
			this.apiProv.get('/' + this.breed.name + '/images').subscribe(response => {
				
				if( response['message'].length > 0 ){

					for(let i = 0; i < 5 ; i++ ){

						this.breedImgs.push(response['message'][i]);

					}

				}

				resolve();

			}, error => {
				reject(error);
			});
		});
	}
		
	getSubBreedImg(){

		return new Promise((resolve, reject) => {
			
			this.apiProv.get('/' + this.subBreed.breedName + "/" + this.subBreed.subBreedName + '/images').subscribe(response => {

				if( response['message'].length > 0 ){

					for(let i = 0; i < 5 ; i++ ){

						this.breedImgs.push(response['message'][i]);

					}

				}

				resolve();

			}, error => {
				reject(error);
			});
		});
	}

}
