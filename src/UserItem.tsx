"use client";
import { CSSProperties, MouseEvent } from 'react';

const AVATAR_SIZE = 36;
const FONT_SIZE = 14;
const STATUS_SIZE = 13;
const WIDTH = 250;

interface UserItemProps {
  avatar?: boolean;
  avatarBackgroundColor?: string;
  avatarUrl?: string;
  border?: boolean;
  dark?: boolean;
  description?: string;
  disabled?: boolean;
  name?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  online?: boolean;
  reverse?: boolean;
  shadow?: boolean;
  squared?: boolean;
  status?: boolean;
  style?: CSSProperties;
  verified?: boolean;
  verifiedColor?: string;
  width?: number;
}

export default function UserItem({
  avatar = true,
  avatarUrl,
  avatarBackgroundColor = '#03b66e',
  border = true,
  dark = false,
  description = 'Youtuber',
  disabled = false,
  onClick,
  online = false,
  reverse = false,
  squared = false,
  status = true,
  shadow = false,
  style,
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
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: squared ? '' : '8px',
      boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,.05)' : '',
      color: 'black',
      cursor: disabled ? 'none' : 'pointer',
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      fontFamily: 'inherit, sans-serif',
      gap: '8px',
      lineHeight: '1.2',
      maxWidth: '100%',
      opacity: disabled ? 0.5 : 1,
      outline: 'none',
      padding: '8px 10px',
      pointerEvents: disabled ? 'none' : 'all',
      position: 'relative',
      userSelect: 'none',
      width: `${WIDTH}px`,
      ...style,
    }} onClick={onClickItem}>
      {avatar && <div style={{ position: 'relative' }}>
        <div style={{
          alignItems: 'center',
          backgroundColor: avatarBackgroundColor,
          backgroundImage: `url(${avatarUrl})`,
          backgroundSize: "cover",
          borderRadius: squared ? '' : '100px',
          color: 'white',
          display: 'flex',
          fontSize: FONT_SIZE,
          fontWeight: 800,
          justifyContent: 'center',
          maxHeight: AVATAR_SIZE,
          maxWidth: AVATAR_SIZE,
          minHeight: AVATAR_SIZE,
          minWidth: AVATAR_SIZE,
          outline: 'none',
          overflow: 'hidden',
        }}>
          {getInitials()}
        </div>
        {status && <div style={{
          backgroundColor: online ? 'limegreen' : '#ccc',
          border: '2px solid white',
          borderRadius: STATUS_SIZE,
          bottom: squared ? '-6px' : 0,
          height: STATUS_SIZE,
          position: 'absolute',
          right: squared ? '-6px' : 0,
          width: STATUS_SIZE,
        }} />}
      </div>}
      <div style={{
        flexDirection: reverse ? 'row-reverse' : 'row',
        textAlign: reverse ? 'right' : 'left',
        width: 'calc(80%)'
      }}>
        {name && <div style={{
          alignItems: 'center',
          display: 'flex',
          gap: '4px',
          justifyContent: reverse ? 'end' : 'start',
          lineHeight: 1.42,
        }}>
          <div style={{
            color: 'black',
            fontSize: FONT_SIZE,
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>{name}</div>
          {verified && <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill={verifiedColor} d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"></path></svg>}
        </div>}
        {description && <div style={{
          color: '#AAA',
          fontSize: FONT_SIZE,
          fontWeight: 500,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>{description}</div>}
      </div>
    </div>
  );
}
