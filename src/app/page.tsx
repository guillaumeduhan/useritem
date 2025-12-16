
'use client';
import UserItem, { UserItemProps } from '@/components/UserItem';
import { useState } from 'react'
import UserOptionsDropdown from '@/components/Form';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { USERITEM_SOURCE } from '@/components/UserItem.source';
import { toast } from 'sonner';
import { USERITEM_INLINE_SOURCE, USERITEM_JSX_INLINE_SOURCE } from '@/components/UserItemInline.source';

const Homepage = () => {
  const [formData, setFormData] = useState<UserItemProps>({
    avatar: true,
    avatarBackgroundColor: "#03b66e",
    avatarUrl: "https://avatars.githubusercontent.com/u/31253241?v=4&size=64",
    border: true,
    description: "",
    disabled: false,
    name: "Guillaume Duhan",
    onClick: () => alert("hello world"),
    onlyAvatar: false,
    reverse: false,
    showStatus: false,
    status: 'online',
    squared: false,
    style: {},
    verified: true
  });

  const SCALES = ['scale-100', 'scale-110', 'scale-120', 'scale-140', 'scale-160', 'scale-180', 'scale-200'] as const;

  const [scale, setScale] = useState<(typeof SCALES)[number]>('scale-120');

  const updateScale = (direction: 'up' | 'down') => {
    setScale((prev) => {
      const index = SCALES.indexOf(prev);
      if (index === -1) return SCALES[0];

      return direction === 'up'
        ? SCALES[Math.min(index + 1, SCALES.length - 1)]
        : SCALES[Math.max(index - 1, 0)];
    });
  };

  const copyTsx = async () => {
    try {
      await navigator.clipboard.writeText(USERITEM_SOURCE);
      toast.success("Copied to clipboard!")
    } catch (error) { }
  }

  const copyTsxInline = async () => {
    try {
      await navigator.clipboard.writeText(USERITEM_INLINE_SOURCE);
      toast.success("Copied to clipboard!")
    } catch (error) { }
  }

  const copyJsxInline = async () => {
    try {
      await navigator.clipboard.writeText(USERITEM_JSX_INLINE_SOURCE);
      toast.success("Copied to clipboard!")
    } catch (error) { }
  }

  return <main className="relative flex flex-col min-h-screen p-2 select-none lg:p-4">
    <div className="z-50 flex items-center justify-center grow">
      <div className={`${scale} fadeIn`}>
        <UserItem {...{ data: formData, setData: setFormData }} />
      </div>
    </div>
    <footer className="flex items-end justify-between gap-12 p-2 cursor-pointer fadeIn lg:p-4">
      <div className="flex items-center gap-4">
        <UserOptionsDropdown {...{ formData, setFormData }} />
        <div className="p-1 rounded bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" onClick={() => updateScale('up')}>
          <Plus />
        </div>
        <div className="p-1 rounded bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" onClick={() => updateScale('down')}>
          <Minus />
        </div>
        <p className="text-sm text-neutral-500">{scale.replace('scale-', '')}%</p>
      </div>
      <div className="grid gap-2 grow">
        <header>
          <h2 className="text-neutral-500 ">Copy/paste</h2>
        </header>
        <div className="flex items-center gap-4 grow">
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer border-neutral-200 hover:bg-white/10 dark:border-neutral-700" onClick={() => copyJsxInline()}>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#00bcd4" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6" /><path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" /><path fill="#00bcd4" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z" /><path fill="#00bcd4" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369" /></svg>
            </div>
            <span className="text-neutral-500">UserItem.jsx</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer border-neutral-200 hover:bg-white/10 dark:border-neutral-700" onClick={() => copyTsxInline()}>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#0288d1" d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6" /><path fill="#0288d1" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" /><path fill="#0288d1" d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z" /><path fill="#0288d1" d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369" /></svg>
            </div>
            <span className="text-neutral-500">UserItem.tsx</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 cursor-pointer border-neutral-200 hover:bg-white/10 dark:border-neutral-700" onClick={() => copyTsx()}>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
            </div>
            <span className="text-neutral-500">UserItem.tsx</span>
          </Button>
        </div>
      </div>
    </footer>
  </main>
}
export default Homepage;