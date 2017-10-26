import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-artiste-p',
    templateUrl: './artiste-p.component.html',
    styleUrls: ['./artiste-p.component.css']
})
export class ArtistePComponent implements OnInit {

    selectedCoeur: string;

    constructor() { }

    ngOnInit() {

        this.selectedCoeur = 'coeur';
    }

}
