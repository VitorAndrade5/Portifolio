import { createRoot } from 'react-dom/client';
import RubberSegment from '../RubberSegment.jsx';
import StaggeredMenu from './StaggeredMenu.jsx';

const menuItems = [
  { label: 'Home', ariaLabel: 'Ir para o início', link: '#home' },
  { label: 'Sobre', ariaLabel: 'Conheça sobre mim', link: '#about' },
  { label: 'Formação', ariaLabel: 'Ver minha formação', link: '#educacao' },
  { label: 'Portfólio', ariaLabel: 'Ver experiência e portfólio', link: '#expe' },
  { label: 'Contato', ariaLabel: 'Ir para contatos', link: '#contato' },
  { label: 'Projetos', ariaLabel: 'Ver projetos', link: '#projetos' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/vito-andrade-50044335a/' },
  { label: 'GitHub', link: 'https://github.com/VitorAndrade5' },
  { label: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=5563992769643&text&type=phone_number&app_absent=0' }
];

const projectFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'design', label: 'Design' },
  { value: 'graphic', label: 'Graphic' },
  { value: 'websites', label: 'websites' }
];

function filterProjects(filter) {
  document.querySelectorAll('.projects_armazenamento ul li').forEach((project) => {
    project.classList.toggle(
      'ativo',
      filter === 'all' || project.id === filter
    );
  });
}

const mountNode = document.querySelector('#project-filters');

const menuMountNode = document.querySelector('#staggered-menu-root');

if (menuMountNode) {
  createRoot(menuMountNode).render(
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen
      colors={['#B497CF', '#5227FF']}
      accentColor="#1b2c61"
    />
  );
}

if (mountNode) {
  createRoot(mountNode).render(
    <RubberSegment
      items={projectFilters}
      defaultValue="all"
      onChange={(value) => filterProjects(value)}
      trackColor="#161616"
      thumbColor="#212844"
      textColor="#c5bfbf"
      activeTextColor="#ffffff"
      size="md"
      radius={6}
      inset={3}
      equalSlots
      stretch={100}
      squash={3}
      speed={1}
      glide={75}
      draggable
      disabled={false}
      aria-label="Filtrar projetos por categoria"
    />
  );
}
