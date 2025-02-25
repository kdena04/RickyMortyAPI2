// episode.component.ts
import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((response: any) => {
      this.episodes = response.results;
    });
  }
}