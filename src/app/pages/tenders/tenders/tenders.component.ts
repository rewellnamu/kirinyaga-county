import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tenders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent {
  tenders = [
    {
      title: 'Supply of Office Stationery',
      description: 'Provision of office stationery for county departments.',
      deadline: 'June 30, 2025',
      category: 'Supplies'
    },
    {
      title: 'Construction of Ward Access Roads',
      description: 'Upgrading road networks in selected wards.',
      deadline: 'July 10, 2025',
      category: 'Infrastructure'
    },
    {
      title: 'ICT Equipment Supply',
      description: 'Supply and installation of IT hardware for education centres.',
      deadline: 'June 25, 2025',
      category: 'ICT'
    },
    {
      title: 'Health Facility Renovation',
      description: 'Renovation of health facilities in rural areas.',
      deadline: 'August 15, 2025',
      category: 'Health'
    },
    {
      title: 'Water Supply Projects',
      description: 'Development of water supply systems in underserved areas.',
      deadline: 'September 5, 2025',
      category: 'Water'
    },
    {
      title: 'Community Training Programs',
      description: 'Training programs for community development and empowerment.',
      deadline: 'July 20, 2025',
      category: 'Training'
    }
  ];
}
