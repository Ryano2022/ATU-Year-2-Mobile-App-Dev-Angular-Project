import { Component, OnInit } from '@angular/core';
import { DinosaurAPIService } from '../dinosaur-api.service';
import { Dinosaur } from '../dinosaur';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {
  dinosaurs: Dinosaur[] = [];

  constructor(private Service: DinosaurAPIService) { }

  ngOnInit() {
    this.Service.getDinosaurs().subscribe(
      (dinosaurs) => {
        this.dinosaurs = dinosaurs;
        console.log(this.dinosaurs);
      });
  }
}