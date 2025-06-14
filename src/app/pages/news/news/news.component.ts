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
      image: 'https://www.kbc.co.ke/wp-content/uploads/2023/06/IMG-20230612-WA0005.jpg'
    },
    {
      title: 'Kirinyaga Roads Upgrade Project Begins',
      summary: 'Major roadworks to enhance transportation across the county have commenced.',
      date: 'June 5, 2025',
      image: 'https://static.ntvkenya.co.ke/uploads/2023/03/WhatsApp-Image-2023-03-17-at-11.54.29-AM-1320x740.jpeg'
    },
    {
      title: 'Women Empowerment Program Launched',
      summary: 'New program to support women entrepreneurs was unveiled this week.',
      date: 'May 28, 2025',
      image: 'https://th.bing.com/th/id/OIP.PXZ28ffecN79Ob2wG9bp-AHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc1'
    },
    {
      title: 'Kirinyaga County Hosts Annual Agricultural Fair',
      summary: 'Farmers and stakeholders gathered to showcase innovations in agriculture.',
      date: 'May 20, 2025',
      image: 'https://www.kbc.co.ke/wp-content/uploads/2023/06/IMG-20230612-WA0005.jpg'
    },
    {
      title: 'New ICT Hub Opens in Kutus',
      summary: 'A state-of-the-art ICT hub has been launched to support tech startups.',
      date: 'May 15, 2025',
      image: 'https://static.ntvkenya.co.ke/uploads/2023/03/WhatsApp-Image-2023-03-17-at-11.54.29-AM-1320x740.jpeg'
    },
    {
      title: 'Kirinyaga County Celebrates World Environment Day',
      summary: 'Various activities held to promote environmental conservation in the county.',
      date: 'June 5, 2025',
      image: 'https://th.bing.com/th/id/OIP.PXZ28ffecN79Ob2wG9bp-AHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc1'
    }
  ];
}
