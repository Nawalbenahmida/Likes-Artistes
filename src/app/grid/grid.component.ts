import { Component, OnInit, Input } from '@angular/core';
import { AtService } from '../at/at.service';
import { Disco } from '../disco/disco';

export class Artiste {
    artiste: string;
    titre: string;
    imageAlbum: string;

}

const ARTISTES = [
    {artiste: "Alonzo", titre: "Binta" , imageAlbum : "https://static.booska-p.com/images/albums/avenue-de-saint-antoine.jpg"},
    {artiste: "PNL", titre:"Dans la légende", imageAlbum :"https://pbs.twimg.com/profile_images/762705636601782272/4LuKS4fl.jpg"},
    {artiste: "SCH", titre:"Gomorra", imageAlbum:"https://static.fnac-static.com/multimedia/Images/FR/NR/41/69/73/7563585/1540-1/tsp20151007102153/A7.jpg"},
];


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    @Input() artistecoeur: string;

    artistes: Artiste[];

    favorites: Disco[] = [ ];

    selectedCoeur(disco) {
        console.log(disco);
    }

    likeArtiste(a: Disco) {
        this.favorites.push(a);
        console.log(a);
    }

    discos: Disco[];

    constructor(private at: AtService) {

    }

    ngOnInit() {
        this.artistes = ARTISTES;

        this.at.discos.subscribe( (c: Disco[]) => {
            this.discos = c;
        });

    }

}
