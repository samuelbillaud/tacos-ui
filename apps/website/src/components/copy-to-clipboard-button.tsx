import { useEffect, useState } from 'react';

import { IconButton } from '@tacos-ui/react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CopyToClipboardButtonProps {
  content: string;
  isAlwaysDark?: boolean;
}

export const CopyToClipboardButton = ({ content, isAlwaysDark }: CopyToClipboardButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copyToClipboard] = useCopyToClipboard();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) return;
    const timer = setTimeout(() => setVisible(true), 1000);

    return () => clearTimeout(timer);
  }, [visible]);

  const handleClick = () => {
    copyToClipboard(content);
    setVisible(false);
  };

  const styles = isAlwaysDark
    ? { color: 'neutral.dark.12', _hover: { bg: 'neutral.dark.a3' } }
    : {};

  return (
    <IconButton
      aria-label="Copy code to clipboard"
      display={{ base: 'none', lg: 'inline-flex' }}
      onClick={handleClick}
      size="sm"
      variant="ghost"
      {...styles}
    >
      {visible ? <CopyIcon /> : <CheckIcon />}
    </IconButton>
  );
};
