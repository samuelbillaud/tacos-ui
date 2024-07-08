import type { TransitionBeforeSwapEvent } from 'astro:transitions/client';

import { useEffect, useState } from 'react';

import { Collapsible } from '@ark-ui/react/collapsible';
import { Icon } from '@tacos-ui/react';
import { ChevronRightIcon } from 'lucide-react';

import { sidebarRecipe } from './sidebar-recipe';

interface Item {
  href?: string;
  id: string;
  items?: Item[];
  name: string;
}

export interface SidebarNavigationProps {
  items: Item[];
  pathname: string;
}

const styles = sidebarRecipe();

export const SidebarNavigation = ({ items, pathname }: SidebarNavigationProps) => {
  const [currentPath, setCurrentPath] = useState<string>(pathname);
  const [expandedIds, setExpandedIds] = useState<string[]>([
    ['code', 'heading', 'kbd', 'link', 'text'].includes(pathname.split('/').pop() ?? '')
      ? 'typography'
      : pathname.split('/').filter(Boolean)[1],
  ]);

  useEffect(() => {
    document.addEventListener('astro:before-swap', (e: TransitionBeforeSwapEvent) => {
      setCurrentPath(e.to.pathname);
    });
  }, []);

  const renderItem = (item: Item, depth = 1) => {
    if (item.items) {
      return (
        <li key={item.name}>
          <Collapsible.Root open={expandedIds.some((id) => id === item.id)}>
            <Collapsible.Trigger
              className={styles.header}
              data-depth={depth}
              onClick={() =>
                setExpandedIds((ids) =>
                  ids.includes(item.id) ? ids.filter((id) => id !== item.id) : [...ids, item.id],
                )
              }
              // @ts-expect-error - `--depth` is not a valid property
              style={{ '--depth': depth }}
            >
              <Icon
                className={styles.indicator}
                data-state={expandedIds.includes(item.id) ? 'open' : 'closed'}
                size="sm"
              >
                <ChevronRightIcon />
              </Icon>
              <span>{item.name}</span>
            </Collapsible.Trigger>
            <Collapsible.Content className={styles.content}>
              <ul className={styles.list} data-depth={depth} key={item.id}>
                {item.items.map((i) => renderItem(i, depth + 1))}
              </ul>
            </Collapsible.Content>
          </Collapsible.Root>
        </li>
      );
    }

    return (
      <li className={styles.item} key={item.name}>
        <a
          aria-current={item.href === currentPath ? 'page' : undefined}
          className={styles.link}
          href={item.href}
          // @ts-expect-error - `--depth` is not a valid property
          style={{ '--depth': depth }}
        >
          {item.name}
        </a>
      </li>
    );
  };

  return (
    <aside>
      <nav>
        <ul className={styles.root}>{items.map((item) => renderItem(item))}</ul>
      </nav>
    </aside>
  );
};
