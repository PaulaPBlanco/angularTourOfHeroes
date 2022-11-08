import { Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../../models/hero.model';
import { HeroService } from '../../../shared/services/hero.service';
import { MessageService } from '../../../shared/services/message.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];
  newHero = new Hero();
  @ViewChild ('createHeroForm') createHeroForm: NgForm;

  display: boolean = false;

    showDialog() {
        this.display = true;
    }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    
  }



  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  cancelSubmit() {
    this.createHeroForm.resetForm();
    this.display=false;
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  onSubmitHero() :void{
    this.add(this.newHero.name);
    // heroName.value = '';
    //this.newHero.name= ' ';
    this.createHeroForm.resetForm();
    this.display=false;
  }

  
}