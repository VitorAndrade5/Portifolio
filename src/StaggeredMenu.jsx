import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const easing = [0.22, 1, 0.36, 1];

export default function StaggeredMenu({
  position = 'right',
  items,
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#ffffff',
  changeMenuColorOnOpen = true,
  colors = ['#B497CF', '#5227FF'],
  accentColor = '#1b2c61'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = 'hidden';
    firstItemRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableItems = document.querySelectorAll(
        '.staggered-menu__panel a, .staggered-menu__panel button'
      );
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem?.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.55,
    delay: reduceMotion ? 0 : delay,
    ease: easing
  });

  return (
    <div className={`staggered-menu staggered-menu--${position}`}>
      <button
        ref={triggerRef}
        type="button"
        className={`staggered-menu__trigger${isOpen ? ' is-open' : ''}`}
        style={{
          color: isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor
        }}
        aria-expanded={isOpen}
        aria-controls="staggered-menu-panel"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? 'Fechar' : 'Menu'}</span>
        <span className="staggered-menu__icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="staggered-menu__backdrop"
              aria-label="Fechar menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: transition() }}
              exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.25 } }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              id="staggered-menu-panel"
              className="staggered-menu__panel"
              aria-label="Menu de navegação"
              initial={{ x: '100%' }}
              animate={{ x: 0, transition: transition() }}
              exit={{ x: '100%', transition: { duration: reduceMotion ? 0 : 0.35, ease: easing } }}
              style={{ '--menu-accent': accentColor, '--menu-color-one': colors[0], '--menu-color-two': colors[1] }}
            >
              <div className="staggered-menu__panel-header">
                <a href="#home" onClick={() => setIsOpen(false)}>Vito Andrade</a>
              </div>
              <nav aria-label="Navegação principal">
                <ul className="staggered-menu__items">
                  {items.map((item, index) => (
                    <motion.li
                      key={item.link}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0, transition: transition(0.12 + index * 0.07) }}
                      exit={{ opacity: 0, y: 12, transition: { duration: reduceMotion ? 0 : 0.15 } }}
                    >
                      <a
                        ref={index === 0 ? firstItemRef : undefined}
                        href={item.link}
                        aria-label={item.ariaLabel}
                        onClick={() => setIsOpen(false)}
                      >
                        {displayItemNumbering && (
                          <span className="staggered-menu__number">{String(index + 1).padStart(2, '0')}</span>
                        )}
                        <span>{item.label}</span>
                        <span className="staggered-menu__arrow" aria-hidden="true">↗</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              {displaySocials && socialItems.length > 0 && (
                <div className="staggered-menu__socials">
                  <span>Encontre-me</span>
                  <ul>
                    {socialItems.map((item) => (
                      <li key={item.label}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
