import {Component} from 'angular2/core'


import {RatingComponent} from '../shared/rating/rating.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    directives: [RatingComponent]
})
export class AppComponent {
    ratingClicked: number;
    itemIdRatingClicked: number;
    items: any[] = [
        {
            "id": 0,
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "rating": 1,
            "name": "Dennis",
            "surename": "Phillips",
            "company": "PROFLEX",
            "email": "undefined.undefined@proflex.io",
            "phone": "+44 (819) 547-3581"
        },
        {
            "id": 1,
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "rating": 1,
            "name": "Morgan",
            "surename": "Mccarthy",
            "company": "CENTREXIN",
            "email": "undefined.undefined@centrexin.biz",
            "phone": "+44 (917) 531-2202"
        },
        {
            "id": 2,
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "rating": 2,
            "name": "Brady",
            "surename": "Craft",
            "company": "JIMBIES",
            "email": "undefined.undefined@jimbies.biz",
            "phone": "+44 (910) 544-3491"
        },
        {
            "id": 3,
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "rating": 1,
            "name": "Alvarado",
            "surename": "Roman",
            "company": "TERRAGO",
            "email": "undefined.undefined@terrago.ca",
            "phone": "+44 (995) 557-2676"
        },
        {
            "id": 4,
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "rating": 4,
            "name": "Clark",
            "surename": "Daugherty",
            "company": "ISOTRONIC",
            "email": "undefined.undefined@isotronic.org",
            "phone": "+44 (964) 456-2352"
        }
    ];
    ratingComponetClick(clickObj: any): void {
        this.ratingClicked = clickObj.rating;
        this.itemIdRatingClicked = clickObj.itemId;
    }
}