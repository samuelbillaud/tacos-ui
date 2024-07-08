import { getCollection } from 'astro:content';
import path from 'node:path';

const getOverviewPages = async () => {
  const priority = ['getting-started', 'about'];

  return getCollection('overview').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.id) - priority.indexOf(b.data.id)),
  );
};

const getComponentsPages = async () => {
  const priority = ['typography', 'component'];

  return getCollection('components').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.category) - priority.indexOf(b.data.category)),
  );
};

export const getAllCollections = async () => {
  const overviewPages = await getOverviewPages();
  const componentPages = await getComponentsPages();

  return [...overviewPages, ...componentPages];
};

const getCurrentPageIndex = async (pathname?: string) => {
  const slug = pathname?.split('/').pop() ?? '';

  const collections = await getAllCollections();

  return collections.findIndex((item) => item.slug.endsWith(slug));
};

export const getPreviousPage = async (pathname?: string) => {
  const collections = await getAllCollections();

  const index = await getCurrentPageIndex(pathname);

  const item = collections[index - 1];

  return item
    ? {
        href: path.join('/docs', item.collection, item.data.id),
        name: item.data.title,
      }
    : null;
};

export const getNextPage = async (pathname?: string) => {
  const collections = await getAllCollections();
  const index = await getCurrentPageIndex(pathname);

  const item = collections[index + 1];

  return item
    ? {
        href: path.join('/docs', item.collection, item.data.id),
        name: item.data.title,
      }
    : null;
};

interface Item {
  href?: string;
  id: string;
  items?: Item[];
  name: string;
}

export const getSitemap = async (): Promise<Item[]> => {
  const overviewPages = await getOverviewPages();
  const componentPages = await getCollection('components');

  const priority = ['typography', 'component'];

  const componentPagesGroupByCategory = componentPages
    .map((item) => item.data.category)
    .sort((a, b) => priority.indexOf(a) - priority.indexOf(b))
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category) => ({
      id: category === 'typography' ? 'typography' : 'components',
      name: category === 'typography' ? 'Typography' : 'Components',
      items: componentPages
        .filter((item) => item.data.category === category)
        .map((item) => ({
          id: `component:${item.data.id}`,
          name: item.data.title,
          href: path.join('/docs', item.collection, item.data.id),
        })),
    }));

  return [
    {
      id: 'overview',
      name: 'Overview',
      items: overviewPages
        .filter((item) => item.collection === 'overview')
        .map((item) => ({
          id: `overview:${item.data.id}`,
          name: item.data.title,
          href: path.join('/docs', item.collection, item.data.id),
        })),
    },
    ...componentPagesGroupByCategory,
  ].filter(Boolean);
};
