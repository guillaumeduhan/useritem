// AUTO-GENERATED — DO NOT EDIT
export const USERITEM_SOURCE = `'use client';
export type UserItemProps = {
  avatar: boolean;
  avatarBackgroundColor?: string;
  avatarUrl?: string;
  border?: boolean;
  description?: string;
  disabled?: boolean;
  name: string;
  onClick?: (() => void) | null;
  onlyAvatar?: boolean;
  reverse?: boolean;
  showStatus?: boolean;
  status?: 'online' | 'offline' | 'busy';
  squared?: boolean;
  style?: React.CSSProperties;
  verified?: boolean;
};

const UserItem = ({ data, setData }: { data: UserItemProps, setData: (u: UserItemProps) => void }) => {

  if (!data) return <p>No data.</p>

  const {
    avatar,
    avatarBackgroundColor,
    avatarUrl,
    border,
    description,
    disabled,
    name,
    onClick,
    showStatus,
    status,
    onlyAvatar,
    reverse,
    squared,
    style,
    verified
  } = data;

  const getStatusColor = () => {
    if (!status) return;
    switch (status) {
      case 'offline':
        return 'bg-red-500 border-red-400'
      case 'busy':
        return 'bg-amber-500 border-amber-400'
      case 'online':
        return 'bg-green-500 border-green-400'
      default:
        break;
    }
  }

  return <div
    onClick={() => {
      if (onClick) onClick()
    }}
    style={{
      maxWidth: 240
    }}
    className={\`
    useritem group px-2 w-full py-2 flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 cursor-pointer transition duration-300 max-w-full truncate
    \${border && 'border border-neutral-200 dark:border-neutral-700 hover:border-neutral-100 hover:dark:border-neutral-600'}
    \${!squared && 'rounded'}
    \${disabled && "pointer-events-none opacity-50"} 
    \${style}
    \${reverse && 'flex-row-reverse text-right'}
    \`}
  >
    {avatar && <div
      className={\`relative flex items-center justify-center avatar size-10 min-w-10 max-w-10 bg-neutral-100 dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-all duration-300 font-[600]
    \${!squared && 'rounded-full'}
    \`}
      style={{
        backgroundColor: avatarBackgroundColor ?? '',
        background: avatarUrl && avatarUrl.length > 0 ? \`url(\${avatarUrl})\` : '',
        backgroundSize: 'cover'
      }}>
      {!avatarUrl && <span>{name[0] || 'A'}</span>}
      {showStatus && <span className={\`absolute bottom-0 right-0 rounded-full size-3 border \${getStatusColor()}\`}></span>}
    </div>}
    {!onlyAvatar && <div className="grid user">
      <div className="flex items-center gap-1 truncate">
        <p className="font-[500] truncate" style={{
          lineHeight: 1.355
        }}>{name}</p>
        {verified && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{
          minWidth: '20px'
        }} viewBox="0 0 16 16"><path fill="currentColor" d="m11.335 2.065l.076.153l.577 1.533c.045.12.14.216.261.261l1.48.555c.65.244.999.938.826 1.595l-.042.13l-.688 1.523a.45.45 0 0 0 0 .37l.653 1.439a1.34 1.34 0 0 1-.543 1.711l-.153.076l-1.533.577a.45.45 0 0 0-.261.261l-.555 1.48a1.34 1.34 0 0 1-1.595.826l-.13-.042l-1.523-.688a.45.45 0 0 0-.37 0l-1.439.654a1.34 1.34 0 0 1-1.711-.544l-.076-.153l-.577-1.533a.45.45 0 0 0-.261-.261l-1.48-.555a1.34 1.34 0 0 1-.826-1.595l.042-.13l.689-1.523a.45.45 0 0 0 0-.37l-.654-1.439a1.34 1.34 0 0 1 .543-1.711l.153-.076l1.533-.577a.45.45 0 0 0 .261-.261l.555-1.48a1.34 1.34 0 0 1 1.595-.826l.13.042l1.523.689a.45.45 0 0 0 .37 0l1.439-.654a1.34 1.34 0 0 1 1.711.543m-1.171 3.64L6.978 9.348L5.816 8.184a.447.447 0 1 0-.632.632l1.5 1.5a.447.447 0 0 0 .652-.022l3.5-4a.447.447 0 0 0-.672-.588" /></svg>}
      </div>
      {description && <small className="truncate opacity-50" style={{
        lineHeight: 1.355
      }}>{description}</small>}
    </div>}
  </div>
}
export default UserItem;`;
