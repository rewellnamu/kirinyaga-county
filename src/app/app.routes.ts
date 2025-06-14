import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      {
        path: 'news',
        loadChildren: () =>
          import('./pages/news/news.routes').then((m) => m.NEWS_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
      },
      {
        path: 'tenders',
        loadChildren: () =>
          import('./pages/tenders/tenders.routes').then((m) => m.TENDERS_ROUTES),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
      },
    ],
  },
];
