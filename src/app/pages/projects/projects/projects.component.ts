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
    },
    {
      title: 'Kirinyaga County Water Supply Project',
      description: 'Improving water supply systems across the county.',
      location: 'Various Locations',
      status: 'Planned'
    },
    {
      title: 'Kutus Market Renovation',
      description: 'Renovating the Kutus market to enhance trade and commerce.',
      location: 'Kutus',
      status: 'Completed'
    },
    {
      title: 'Gichugu Eco-Tourism Development',
      description: 'Developing eco-tourism facilities to promote local tourism.',
      location: 'Gichugu',
      status: 'Ongoing'
    },
    {
      title: 'Kianyaga Town Road Upgrade',
      description: 'Upgrading roads in Kianyaga town to improve transport infrastructure.',
      location: 'Kianyaga',
      status: 'Planned'
    },
    {
      title: 'Mwea Tea Factory Modernization',
      description: 'Modernizing tea processing facilities to enhance production efficiency.',
      location: 'Mwea',
      status: 'Ongoing'
    },
    {
      title: 'Kutus Market Renovation',
      description: 'Renovating the Kutus market to enhance trade and commerce.',
      location: 'Kutus',
      status: 'Completed'
    },
    {
      title: 'Gichugu Eco-Tourism Development',
      description: 'Developing eco-tourism facilities to promote local tourism.',
      location: 'Gichugu',
      status: 'Ongoing'
    },
    {
      title: 'Kianyaga Town Road Upgrade',
      description: 'Upgrading roads in Kianyaga town to improve transport infrastructure.',
      location: 'Kianyaga',
      status: 'Planned'
    },
    {
      title: 'Mwea Tea Factory Modernization',
      description: 'Modernizing tea processing facilities to enhance production efficiency.',
      location: 'Mwea',
      status: 'Ongoing'
    },
    {
      title: 'Kutus ICT Hub',
      description: 'Establishing an ICT hub to support local tech startups and innovation.',
      location: 'Kutus',
      status: 'Planned'
    },
    {
      title: 'Kerugoya Sports Complex',
      description: 'Building a modern sports complex to promote athletics and community sports.',
      location: 'Kerugoya',
      status: 'Ongoing'
    },
    {
      title: 'Gichugu Water Harvesting Project',
      description: 'Implementing water harvesting systems to improve water availability in Gichugu.',
      location: 'Gichugu',
      status: 'Planned'
    }
  ];
}
