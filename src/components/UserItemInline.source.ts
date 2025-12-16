// AUTO-GENERATED — DO NOT EDIT
export const USERITEM_INLINE_SOURCE = `
'use client';
import React from 'react';

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

const UserItem = ({
  data,
  setData,
}: {
  data: UserItemProps;
  setData: (u: UserItemProps) => void;
}) => {
  if (!data) return <p>No data.</p>;

  const {
    avatar,
    avatarBackgroundColor = '#ddd',
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
    verified,
  } = data;

  const statusColor: Record<string, string> = {
    online: '#22c55e',
    offline: '#ef4444',
    busy: '#f59e0b',
  };

  return (
    <div
      onClick={() => onClick?.()}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        border: border ? '1px solid #e5e7eb' : undefined,
        borderRadius: squared ? 0 : 8,
        maxWidth: 240,
        flexDirection: reverse ? 'row-reverse' : 'row',
        textAlign: reverse ? 'right' : 'left',
        transition: 'background-color 0.2s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {avatar && (
        <div
          style={{
            position: 'relative',
            width: 40,
            height: 40,
            minWidth: 40,
            borderRadius: squared ? 0 : '50%',
            backgroundColor: avatarBackgroundColor,
            backgroundImage: avatarUrl ? "url({avatarUrl})" : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            color: '#111',
          }}
        >
          {!avatarUrl && <span>{name[0] ?? 'A'}</span>}

          {showStatus && status && (
            <span
              style={{
                position: 'absolute',
                bottom: -1,
                right: -1,
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: statusColor[status],
                border: '2px solid #000',
              }}
            />
          )}
        </div>
      )}

      {!onlyAvatar && (
        <div
          style={{
            display: 'grid',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              overflow: 'hidden',
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.35,
              }}
            >
              {name}
            </p>

            {verified && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                style={{ minWidth: 16 }}
              >
                <path
                  fill="currentColor"
                  d="m11.335 2.065l.076.153l.577 1.533c.045.12.14.216.261.261l1.48.555c.65.244.999.938.826 1.595l-.042.13l-.688 1.523a.45.45 0 0 0 0 .37l.653 1.439a1.34 1.34 0 0 1-.543 1.711l-.153.076l-1.533.577a.45.45 0 0 0-.261.261l-.555 1.48a1.34 1.34 0 0 1-1.595.826l-.13-.042l-1.523-.688a.45.45 0 0 0-.37 0l-1.439.654a1.34 1.34 0 0 1-1.711-.544l-.076-.153l-.577-1.533a.45.45 0 0 0-.261-.261l-1.48-.555a1.34 1.34 0 0 1-.826-1.595l.042-.13l.689-1.523a.45.45 0 0 0 0-.37l-.654-1.439a1.34 1.34 0 0 1 .543-1.711l.153-.076l1.533-.577a.45.45 0 0 0 .261-.261l.555-1.48a1.34 1.34 0 0 1 1.595-.826l.13.042l1.523.689a.45.45 0 0 0 .37 0l1.439-.654a1.34 1.34 0 0 1 1.711.543"
                />
              </svg>
            )}
          </div>

          {description && (
            <small
              style={{
                opacity: 0.6,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.35,
              }}
            >
              {description}
            </small>
          )}
        </div>
      )}
    </div>
  );
};

export default UserItem;
`;

// AUTO-GENERATED — DO NOT EDIT
export const USERITEM_JSX_INLINE_SOURCE = `
'use client';
import React from 'react';

const UserItem = ({ data, setData }) => {
  if (!data) return <p>No data.</p>;

  const {
    avatar,
    avatarBackgroundColor = '#ddd',
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
    verified,
  } = data;

  const statusColor = {
    online: '#22c55e',
    offline: '#ef4444',
    busy: '#f59e0b',
  };

  return (
    <div
      onClick={() => onClick && onClick()}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        maxWidth: 240,
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        border: border ? '1px solid #e5e7eb' : undefined,
        borderRadius: squared ? 0 : 8,
        flexDirection: reverse ? 'row-reverse' : 'row',
        textAlign: reverse ? 'right' : 'left',
        backgroundColor: 'transparent',
        transition: 'background-color 0.2s ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {avatar && (
        <div
          style={{
            position: 'relative',
            width: 40,
            height: 40,
            minWidth: 40,
            borderRadius: squared ? 0 : '50%',
            backgroundColor: avatarBackgroundColor,
            backgroundImage: avatarUrl ? "url({ avatarUrl })" : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          {!avatarUrl && <span>{name?.[0] || 'A'}</span>}

          {showStatus && status && (
            <span
              style={{
                position: 'absolute',
                bottom: -1,
                right: -1,
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: statusColor[status],
                border: '2px solid #000',
              }}
            />
          )}
        </div>
      )}

      {!onlyAvatar && (
        <div style={{ display: 'grid', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              overflow: 'hidden',
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.35,
              }}
            >
              {name}
            </p>

            {verified && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                style={{ minWidth: 16 }}
              >
                <path
                  fill="currentColor"
                  d="m11.335 2.065l.076.153l.577 1.533c.045.12.14.216.261.261l1.48.555c.65.244.999.938.826 1.595l-.042.13l-.688 1.523a.45.45 0 0 0 0 .37l.653 1.439a1.34 1.34 0 0 1-.543 1.711l-.153.076l-1.533.577a.45.45 0 0 0-.261.261l-.555 1.48a1.34 1.34 0 0 1-1.595.826l-.13-.042l-1.523-.688a.45.45 0 0 0-.37 0l-1.439.654a1.34 1.34 0 0 1-1.711-.544l-.076-.153l-.577-1.533a.45.45 0 0 0-.261-.261l-1.48-.555a1.34 1.34 0 0 1-.826-1.595l.042-.13l.689-1.523a.45.45 0 0 0 0-.37l-.654-1.439a1.34 1.34 0 0 1 .543-1.711l.153-.076l1.533-.577a.45.45 0 0 0 .261-.261l.555-1.48a1.34 1.34 0 0 1 1.595-.826l.13.042l1.523.689a.45.45 0 0 0 .37 0l1.439-.654a1.34 1.34 0 0 1 1.711.543"
                />
              </svg>
            )}
          </div>

          {description && (
            <small
              style={{
                opacity: 0.6,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.35,
              }}
            >
              {description}
            </small>
          )}
        </div>
      )}
    </div>
  );
};

export default UserItem;

`;