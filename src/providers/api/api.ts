import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiProvider {

	public apiRoot: string = 'https://dog.ceo/api/breed';

	constructor(public http: HttpClient) {
		
	}

	get( endpoint: string ) {

		// console.log(this.apiRoot + endpoint);
		return this.http.get( this.apiRoot + endpoint );
		
	}

}
