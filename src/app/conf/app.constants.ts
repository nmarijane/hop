import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'https://maps.googleapis.com/maps/api/place/';  // URL to web api
    public apiKey = '	AIzaSyAVAcfn1dYEnuuK17fbkYqzVDNLdW0A-pU';
    public apiUrlNearby = 'nearbysearch/json';
    public language = 'fr-FR';
    public serverWithApiUrlSearch = this.server + this.apiUrlNearby;

}
