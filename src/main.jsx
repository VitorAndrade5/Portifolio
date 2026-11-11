import { createRoot } from 'react-dom/client';
import RubberSegment from '../RubberSegment.jsx';

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
