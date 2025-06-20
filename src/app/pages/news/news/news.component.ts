import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  mockNews = [
    {
      title: 'Governor Launches New Health Facility',
      summary: 'A new health center has been opened in Mwea to improve healthcare access.',
      date: 'June 10, 2025',
      image: '/pic/hospital.jpg'
    },
    {
      title: 'Kirinyaga Roads Upgrade Project Begins',
      summary: 'Major roadworks to enhance transportation across the county have commenced.',
      date: 'June 5, 2025',
      image: '/pic/roads.jpeg'
    },
    {
      title: 'Women Empowerment Program Launched',
      summary: 'New program to support women entrepreneurs was unveiled this week.',
      date: 'May 28, 2025',
      image: '/pic/women empower.png'
    },
    {
      title: 'Kirinyaga County Hosts Annual Agricultural Fair',
      summary: 'Farmers and stakeholders gathered to showcase innovations in agriculture.',
      date: 'May 20, 2025',
      image: '/pic/Annual agri.jpg'
    },
    {
      title: 'New ICT Hub Opens in Kutus',
      summary: 'A state-of-the-art ICT hub has been launched to support tech startups.',
      date: 'May 15, 2025',
      image: '/pic/kutus ict.png'
    },
    {
      title: 'Kirinyaga County Celebrates World Environment Day',
      summary: 'Various activities held to promote environmental conservation in the county.',
      date: 'June 5, 2025',
      image: '/pic/environment.webp'
    },
    {
      title: 'Youth Sports Tournament Kicks Off',
      summary: 'A week-long sports tournament for youth has started in Kerugoya.',
      date: 'June 1, 2025',
      image: '/pic/sports.jpg'
    },
    {
      title: 'Kirinyaga County Launches Digital Services Portal',
      summary: 'Residents can now access various county services online through a new portal.',
      date: 'May 25, 2025',
      image: '/pic/digital.jpg'
    },
    {
      title: 'Health Campaign Targets Malaria Prevention',
      summary: 'A new campaign aims to reduce malaria cases in the region through awareness and distribution of mosquito nets.',
      date: 'May 18, 2025',
      image: '/pic/malaria.jpg'
    },
    {
      title: 'Kirinyaga County Hosts Cultural Festival',
      summary: 'A vibrant cultural festival showcasing local traditions and crafts was held in Kerugoya.',
      date: 'May 10, 2025',
      image: '/pic/culture.jpg'
    }
  ];
}
