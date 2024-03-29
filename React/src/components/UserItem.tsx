"use client";
import Verified from '../components/Icons/Verified';
import "./style.scss";

export type UserItemProps = {
  avatar?: boolean,
  avatarUrl?: string,
  border?: boolean,
  color?: string;
  children?: React.ReactNode,
  description?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  loading?: boolean;
  width?: number;
  online?: boolean;
  onlyAvatar?: boolean;
  reverse?: boolean;
  squared?: boolean;
  status?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
  title?: string;
  verified?: boolean;
};

export default function UserItem({
  avatar = true,
  avatarUrl,
  border = true,
  children,
  color,
  description,
  disabled,
  loading,
  width = 275,
  onClick,
  online,
  onlyAvatar,
  reverse,
  squared,
  status,
  shadow,
  small,
  style,
  title,
  verified
}: any) {
  const onClickItem = (e: any) => {
    if (loading) return;
    if (onClick) return onClick(e);
  };

  const getInitials = () => {
    if (avatarUrl) return;
    const INITIALS = "AA"
    if (!title) return INITIALS;
    const words = title.split(" ");
    if (!words) return INITIALS;
    if (words.length === 0) return INITIALS;
    const initials = words.map((word) => {
      if (word[0]) return word[0].toUpperCase()
    });
    return initials.join("");
  };

  if (loading) return <div className="useritem useritem--loading" style={{
    display: 'flex',
    alignItems: 'center',
    border: border ? '1px solid #ccc' : '',
    borderRadius: squared ? '' : '8px',
    flexDirection: reverse ? 'row-reverse' : 'row',
    boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,0.05)' : '',
    ...style
  }}>
    <div className="useritem--loading--avatar" style={{
      borderRadius: squared ? '' : '100px',
    }}></div>
    <div style={{
      display: 'grid',
      gap: '8px'
    }}>
      <div className="useritem--loading--title" />
      <div className="useritem--loading--description" />
    </div>
  </div>

  return <div className={`useritem ${disabled ? 'useritem--disabled' : ''}`} style={{
    display: 'flex',
    alignItems: 'center',
    padding: onlyAvatar ? '' : '12px 14px',
    border: border && !onlyAvatar ? '1px solid #ccc' : '',
    borderRadius: squared ? '' : '8px',
    fontSize: small ? '14px' : '16px',
    flexDirection: reverse ? 'row-reverse' : 'row',
    boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,0.05)' : '',
    width: `${onlyAvatar ? 'fit-content' : width + 'px'}`,
    maxWidth: '100%',
    ...style
  }} onClick={onClickItem}>
    {avatar && <div style={{ position: 'relative' }}>
      <div className="useritem--avatar" style={{
        maxWidth: small ? 36 : 48,
        minWidth: small ? 36 : 48,
        maxHeight: small ? 36 : 48,
        minHeight: small ? 36 : 48,
        fontSize: small ? '14px' : '16px',
        backgroundColor: color || '#ccc',
        backgroundImage: `url(${avatarUrl})`,
        backgroundSize: "cover",
        borderRadius: squared ? '' : '100px',
      }}>
        {getInitials()}
      </div>
      {status && <div style={{
        width: 14,
        height: 14,
        backgroundColor: online ? 'limegreen' : '#ccc',
        borderRadius: 14,
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
      {title && <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        justifyContent: reverse ? 'end' : 'start'
      }}>
        <div className="useritem--title truncate" style={{
          fontWeight: 700
        }}>{title}</div>
        {verified && <Verified />}
      </div>}
      {description && <div className="useritem--description truncate">{description}</div>}
    </div>
    }
  </div >
}