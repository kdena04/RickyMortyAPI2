import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  standalone: true, 
  imports: [CommonModule]
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe((data: any) => {
      this.personajes = data.results; 
    });
  }
}