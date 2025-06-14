import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Mwea Irrigation Upgrade',
      description: 'Enhancing irrigation channels to boost rice farming in Mwea.',
      location: 'Mwea, Kirinyaga',
      status: 'Ongoing'
    },
    {
      title: 'Kerugoya Level 5 Hospital Expansion',
      description: 'Expanding facilities to accommodate more patients and modern equipment.',
      location: 'Kerugoya',
      status: 'Completed'
    },
    {
      title: 'Youth Empowerment Training Centre',
      description: 'A modern facility to equip youth with vocational and digital skills.',
      location: 'Kutus',
      status: 'Ongoing'
    }
  ];
}
