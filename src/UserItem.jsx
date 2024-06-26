"use client";
import React from 'react';

const AVATAR_SIZE = 42;
const STATUS_SIZE = 12;

export default function UserItem({
  avatar = true,
  avatarUrl,
  backgroundColor = '#03b66e',
  border = true,
  description = 'Youtuber',
  disabled = false,
  width = 275,
  onClick,
  online = false,
  onlyAvatar = false,
  reverse = false,
  squared = false,
  status = true,
  shadow = false,
  style = {},
  name = 'Guillaume Duhan',
  verified = true
}) {
  const onClickItem = (e) => {
    if (onClick) onClick(e);
    alert("Hello there!")
  };

  const getInitials = () => {
    if (avatarUrl) return;
    if (!name) return "AA";
    return name.split(" ").map(word => word[0]?.toUpperCase()).join("");
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: onlyAvatar ? '' : '10px 12px',
      border: border && !onlyAvatar ? '1px solid #ccc' : '',
      borderRadius: squared ? '' : '8px',
      flexDirection: reverse ? 'row-reverse' : 'row',
      boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,.05)' : '',
      width: `${onlyAvatar ? 'fit-content' : `${width}px`}`,
      maxWidth: '100%',
      gap: '8px',
      backgroundColor: 'transparent',
      fontFamily: 'inherit, sans-serif',
      color: 'black',
      lineHeight: '1.2',
      outline: 'none',
      cursor: disabled ? 'none' : 'pointer',
      position: 'relative',
      pointerEvents: disabled ? 'none' : 'all',
      userSelect: 'none',
      opacity: disabled ? 0.5 : 1,
      ...style,
    }} onClick={onClickItem}>
      {avatar && <div style={{ position: 'relative' }}>
        <div style={{
          overflow: 'hidden',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '16px',
          outline: 'none',
          maxWidth: AVATAR_SIZE,
          minWidth: AVATAR_SIZE,
          maxHeight: AVATAR_SIZE,
          minHeight: AVATAR_SIZE,
          backgroundColor: backgroundColor || '#ccc',
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
      {!onlyAvatar && <div style={{
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
            fontWeight: 800,
            fontSize: '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{name}</div>
          {verified && <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"></path></svg>}
        </div>}
        {description && <div style={{
            color: '#AAA',
            fontWeight: 500,
            fontSize: '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{description}</div>}
      </div>}
    </div >
  );
};
