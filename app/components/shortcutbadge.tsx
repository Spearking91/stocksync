'use client';

import { useState, useEffect } from 'react';

export default function ShortcutBadge() {
  const [isMac, setIsMac] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if the user is on a Mac or Apple device
    const isApple = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
    setIsMac(isApple);
  }, []);

  // Return null or a subtle placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return <kbd className="kbd kbd-md opacity-0">Ctrl + K</kbd>;
  }

  return (
    <>
      {isMac ? (
        <kbd className="kbd kbd-md">⌘K</kbd>
      ) : (
        <kbd className="kbd kbd-md">Ctrl + K</kbd>
      )}
    </>
  );
}