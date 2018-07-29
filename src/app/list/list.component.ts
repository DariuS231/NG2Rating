import { Component } from '@angular/core';

interface ICompany {
  id: number;
  rating: number;
  contact: string;
  company: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AppComponent {

  ratingClicked: number;
  itemIdRatingClicked: string;
  items: ICompany[] = [
    { 'id': 0, 'rating': 3, 'contact': 'Dennis Phillips', 'company': 'PROFLEX' },
    { 'id': 1, 'rating': 1, 'contact': 'Morgan Mccarthy', 'company': 'CENTREXIN' },
    { 'id': 2, 'rating': 2, 'contact': 'Brady Craft', 'company': 'JIMBIES' },
    { 'id': 3, 'rating': 5, 'contact': 'Alvarado Roman', 'company': 'TERRAGO' },
    { 'id': 4, 'rating': 4, 'contact': 'Clark Daugherty', 'company': 'ISOTRONIC' }
  ];
  ratingComponentClick(clickObj: any): void {
    const item = this.items.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.company;
    }

  }
}
