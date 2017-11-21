import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { removeSummaryDuplicates } from '@angular/compiler';

@IonicPage({
	name:'subBreeds',
	segment: "subBreeds"
})
@Component({
  selector: 'page-sub-breeds',
  templateUrl: 'sub-breeds.html',
})
export class SubBreedsPage {

	public breed: {name:string , hasSubs: boolean};

	public subBreedsList: string[];
	

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProv: ApiProvider ) {

		this.breed = this.navParams.get('breed');
		
	}

	ionViewCanEnter(){
		
		this.subBreedsList = [];
		this.getSubBreeds();
		
	}

	getSubBreeds(): Promise <any>{
		return new Promise((resolve, reject) => {
			this.apiProv.get('/' + this.breed.name + '/list').subscribe(response => {
				
				this.subBreedsList = response['message'];

				resolve();
			}, error => {
				reject(error);
			});
		});
	}

	

	goToSubBreedImg( subBreed){
		let sub = { 
			breedName : this.breed.name,
			subBreedName : subBreed
		}

		this.navCtrl.push( 'slider', { subBreed : sub} );
	}



}
