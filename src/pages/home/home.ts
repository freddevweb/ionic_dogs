import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SubBreedsPage } from '../sub-breeds/sub-breeds';



@IonicPage({
	name:'home',
	segment: "home"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	public breeds: {name:string , hasSubs: boolean}[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public apiProv: ApiProvider ) {
	}

	ionViewCanEnter(): Promise <any> {
		return new Promise((resolve, reject) => {
			this.apiProv.get('s/list/all').subscribe(response => {

				if( response['status'] == "success" ){

					let res = response['message'];
					let arrayResult : {name:string , hasSubs: boolean}[]= [];
					
					for (var k in res){

						if (res.hasOwnProperty(k)) {

							let subBreeds: boolean = false;

							if(res[k].length != 0 ){

								subBreeds = true;

							}
							
							let line = { 'name': k, 'hasSubs': subBreeds };
							arrayResult = arrayResult.concat( [line] );
							
						}
					}

					this.breeds = arrayResult;
				
					
				}
				resolve();
			}, error => {
				reject(error);
			});
		});
	}

	goToSubBreeds( breed ){

		if( breed["hasSubs"] === true ){

			this.navCtrl.push( 'subBreeds', { breed: breed } );
		}
		else if( breed["hasSubs"] === false) {

			this.navCtrl.push( 'slider', { breed: breed } )
		}
		
	}

	

}
