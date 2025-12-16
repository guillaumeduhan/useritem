'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const UserOptionsDropdown = ({ formData, setFormData }: any) => {
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 cursor-pointer border-neutral-200 dark:hover:bg-neutral-600 dark:border-neutral-700">
          <Settings />
          <span>Customize</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-full max-w-[460px] p-0 bg-neutral-900 border-neutral-200 dark:border-neutral-700">
        <form className="grid grid-cols-2 gap-3 p-4">
          <label className="text-sm text-neutral-400">Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} />

          <label className="text-sm text-neutral-400">Description</label>
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label className="text-sm text-neutral-400">Avatar</label>
          <Switch
            checked={formData.avatar}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'avatar', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Avatar URL</label>
          <Input
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
          />

          <label className="text-sm text-neutral-400">Avatar BG</label>
          <Input
            type="color"
            name="avatarBackgroundColor"
            value={formData.avatarBackgroundColor}
            onChange={handleChange}
          />

          <label className="text-sm text-neutral-400">Border</label>
          <Switch
            checked={formData.border}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'border', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Disabled</label>
          <Switch
            checked={formData.disabled}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'disabled', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Only avatar</label>
          <Switch
            checked={formData.onlyAvatar}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'onlyAvatar', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Reverse</label>
          <Switch
            checked={formData.reverse}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'reverse', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Squared</label>
          <Switch
            checked={formData.squared}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'squared', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Verified</label>
          <Switch
            checked={formData.verified}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'verified', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Show Status</label>
          <Switch
            checked={formData.showStatus}
            onCheckedChange={(checked) =>
              handleChange({ target: { name: 'showStatus', type: 'checkbox', checked } })
            }
          />

          <label className="text-sm text-neutral-400">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="px-2 text-sm bg-transparent border rounded-md h-9 border-neutral-800"
          >
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="busy">busy</option>
          </select>

          {/* <label className="text-sm text-neutral-400">Max Width</label>
          <Input
            type="number"
            name="maxWidth"
            value={formData.maxWidth}
            onChange={handleChange}
          /> */}
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserOptionsDropdown;
