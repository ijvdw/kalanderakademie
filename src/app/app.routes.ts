import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Services } from './pages/services';
import { Schedule } from './pages/schedule';
import { Contact } from './pages/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'schedule', component: Schedule },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
