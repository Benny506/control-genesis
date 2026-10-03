import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTransitionLink } from '../../hooks/useTransitionLink';
import { useTransition } from '../../context/TransitionContext';

export const GlobalLinkInterceptor = () => {
  const go = useTransitionLink();
  const { isTransitioning } = useTransition();
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      // 1. Check for elements with explicit data-transition-path
      const dataEl = e.target.closest('[data-transition-path]');
      if (dataEl) {
        const path = dataEl.getAttribute('data-transition-path');
        if (path) {
          const normalize = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
          if (normalize(path) !== normalize(location.pathname)) {
            e.preventDefault();
            e.stopPropagation();
            if (!isTransitioning) {
              go(path);
            }
          }
          return;
        }
      }

      // 2. Check for internal anchor tags
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');
      const isDownload = target.hasAttribute('download');

      if (!href || targetAttr === '_blank' || isDownload) return;

      // Ignore external protocols & schemes
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('//')
      ) {
        return;
      }

      let internalPath = null;
      if (href.startsWith('#/')) {
        // HashRouter style link (e.g. '#/works' -> '/works')
        internalPath = href.slice(1);
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        // Standard path (e.g. '/works')
        internalPath = href;
      }

      // If valid internal route and not merely an on-page hash link (like href="#")
      if (internalPath) {
        const normalize = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
        if (normalize(internalPath) !== normalize(location.pathname)) {
          e.preventDefault();
          e.stopPropagation();
          if (!isTransitioning) {
            go(internalPath);
          }
        }
      }
    };

    // Attach in capture phase so we intercept before standard navigation handlers
    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [go, location.pathname, isTransitioning]);

  return null;
};

export default GlobalLinkInterceptor;
