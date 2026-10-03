import { useCallback } from 'react';
import { useTransition } from '../context/TransitionContext';

/**
 * Returns a navigate function that triggers the full ForeStance-style
 * page-transition animation (circular wipe stemming from the navbar logo)
 * before routing to the given path.
 *
 * Usage:
 *   const go = useTransitionLink();
 *   <div onClick={() => go('/works')}>...</div>
 */
export const useTransitionLink = () => {
  const { startTransition } = useTransition();

  const go = useCallback(
    (path) => {
      if (!path) return;

      const logoEl = document.getElementById('navbar-logo');
      const rect = logoEl && logoEl.getBoundingClientRect().width > 0
        ? logoEl.getBoundingClientRect()
        : { top: 18, left: 24, width: 38, height: 38 };

      startTransition(path, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    },
    [startTransition]
  );

  return go;
};

export default useTransitionLink;
