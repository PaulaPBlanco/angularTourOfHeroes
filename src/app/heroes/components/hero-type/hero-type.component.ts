import { Component, Input, OnInit } from '@angular/core';
import { heroTypeNames, heroTypes } from '../../constants/hero.constants';
import { Hero } from '../../models/hero.model';


@Component({
  selector: 'app-hero-type',
  templateUrl: './hero-type.component.html',
  styleUrls: ['./hero-type.component.scss']
})
export class HeroTypeComponent implements OnInit {
  @Input() typeId: number | undefined;
  
  heroTypes = heroTypes;
  heroTypeNames = heroTypeNames;
  
  constructor() { 
   
  }
  

  ngOnInit(): void {
  }

}
