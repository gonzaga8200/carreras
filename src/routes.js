/**
 * Created by gonzalo on 16/04/18.
 */

import Carreras from './components/Carreras.vue';
import Contact from './components/Contact.vue';
import Home from './Home.vue';
export const routes = [
  {path: '', component: Home },
  {path: '/carreras', component: Carreras },
  {path: '/contact', component: Contact },
]
