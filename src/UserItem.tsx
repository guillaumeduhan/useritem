"use client";
import { CSSProperties, MouseEvent } from 'react';

const AVATAR_SIZE = 36;
const FONT_SIZE = 14;
const STATUS_SIZE = 13;
const WIDTH = 250;

interface UserItemProps {
  avatar?: boolean;
  avatarUrl?: string;
  avatarBackgroundColor?: string;
  border?: boolean;
  description?: string;
  disabled?: boolean;
  width?: number;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  online?: boolean;
  reverse?: boolean;
  squared?: boolean;
  status?: boolean;
  shadow?: boolean;
  style?: CSSProperties;
  name?: string;
  verified?: boolean;
  verifiedColor?: string;
}

export default function UserItem({
  avatar = true,
  avatarUrl,
  avatarBackgroundColor = '#03b66e',
  border = true,
  description = 'Youtuber',
  disabled = false,
  onClick,
  online = false,
  reverse = false,
  squared = false,
  status = true,
  shadow = false,
  style = {
    padding: '8px 10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: squared ? '' : '8px',
    flexDirection: reverse ? 'row-reverse' : 'row',
    boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,.05)' : '',
    width: `${WIDTH}px`,
    maxWidth: '100%',
    gap: '8px',
    fontFamily: 'inherit, sans-serif',
    color: 'black',
    lineHeight: '1.2',
    outline: 'none',
    cursor: disabled ? 'none' : 'pointer',
    position: 'relative',
    pointerEvents: disabled ? 'none' : 'all',
    userSelect: 'none',
    opacity: disabled ? 0.5 : 1,
  },
  name = 'Guillaume Duhan',
  verified = true,
  verifiedColor = 'black'
}: UserItemProps) {
  const onClickItem = (e: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(e);
    else alert("Hello there!")
  };

  const getInitials = () => {
    if (avatarUrl) return;
    if (!name) return "AA";
    return name.split(" ").map(word => word[0]?.toUpperCase()).join("");
  };

  return (
    <div style={{
      ...style,
    }} onClick={onClickItem}>
      {avatar && <div style={{ position: 'relative' }}>
        <div style={{
          overflow: 'hidden',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: avatarBackgroundColor,
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: FONT_SIZE,
          outline: 'none',
          maxWidth: AVATAR_SIZE,
          minWidth: AVATAR_SIZE,
          maxHeight: AVATAR_SIZE,
          minHeight: AVATAR_SIZE,
          backgroundImage: `url(${avatarUrl})`,
          backgroundSize: "cover",
          borderRadius: squared ? '' : '100px'
        }}>
          {getInitials()}
        </div>
        {status && <div style={{
          width: STATUS_SIZE,
          height: STATUS_SIZE,
          backgroundColor: online ? 'limegreen' : '#ccc',
          borderRadius: STATUS_SIZE,
          border: '2px solid white',
          position: 'absolute',
          bottom: squared ? '-6px' : 0,
          right: squared ? '-6px' : 0
        }} />}
      </div>}
      <div style={{
        textAlign: reverse ? 'right' : 'left',
        flexDirection: reverse ? 'row-reverse' : 'row',
        width: 'calc(80%)'
      }}>
        {name && <div style={{
          display: 'flex',
          lineHeight: 1.42,
          gap: '4px',
          alignItems: 'center',
          justifyContent: reverse ? 'end' : 'start'
        }}>
          <div style={{
            color: 'black',
            fontWeight: 600,
            fontSize: FONT_SIZE,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{name}</div>
          {verified && <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill={verifiedColor} d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"></path></svg>}
        </div>}
        {description && <div style={{
          color: '#AAA',
          fontWeight: 500,
          fontSize: FONT_SIZE,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{description}</div>}
      </div>
    </div>
  );
}
