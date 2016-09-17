import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class YoutubeService {

    constructor(@Inject(Http) http:Http) {

    }

    searchVideo(search:string) {
        return new Promise((resolve, reject) => {
            let params:URLSearchParams = new URLSearchParams();
            params.set('key', "AIzaSyCY6vunaNGae5ava4cmofVIq96Lre8YgOc");
            params.set('type', "video");
            params.set('maxResults', "30");
            params.set('part', "id,snippet");
            params.set('fields', "items(id,snippet(title,description,thumbnails(default),channelTitle))");
            params.set('q', search);
            http.get('https://www.googleapis.com/youtube/v3/search', {
                    search: params
                })
                .subscribe(data => {
                    resolve(data.json());
                }, error => {
                    reject(error);
                });
        }
    }

}
