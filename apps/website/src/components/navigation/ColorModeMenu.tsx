import { useEffect, useState } from 'react';

import { IconButton, Menu } from '@tacos-ui/react';
import { SunMoon } from 'lucide-react';

import { css } from '@tacos-ui/styled-system/css';
import { Circle } from '@tacos-ui/styled-system/jsx';

type ThemeState = 'dark' | 'light' | 'system';

const localStorageThemeName = 'tacos-ui-color-theme';

const themes: { label: string; value: ThemeState }[] = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
  {
    value: 'system',
    label: 'System',
  },
];

export function ColorModeMenu() {
  const [theme, setThemeState] = useState<ThemeState>('light');

  const onSelect = ({ value }: { value: string }) => {
    setThemeState(value as ThemeState);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(localStorageThemeName, value);
    }
  };

  useEffect(() => {
    const themeFromLocalStorage =
      typeof localStorage !== 'undefined' && localStorage.getItem(localStorageThemeName)
        ? (localStorage.getItem(localStorageThemeName) as ThemeState)
        : 'light';

    setThemeState(themeFromLocalStorage);
  }, []);

  useEffect(() => {
    const themeFromLocalStorage =
      typeof localStorage !== 'undefined' && localStorage.getItem(localStorageThemeName)
        ? (localStorage.getItem(localStorageThemeName) as ThemeState)
        : 'light';

    const isDarkMode =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      themeFromLocalStorage === 'dark';

    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <Menu.Root onSelect={onSelect} positioning={{ placement: 'bottom-start' }}>
      <Menu.Trigger asChild>
        <IconButton variant="ghost">
          <SunMoon />
          <span className={css({ srOnly: true })}>Toggle theme</span>
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            {themes.map(({ value, label }) => (
              <Menu.Item key={value} value={value}>
                <Circle
                  background="fg.default"
                  marginRight="2"
                  size="2"
                  visibility={value === theme ? 'visible' : 'hidden'}
                />
                {label}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
