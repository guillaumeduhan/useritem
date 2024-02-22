import "./style.scss";

export type UserItemProps = {
  avatar?: boolean,
  avatarUrl?: string,
  border?: boolean,
  color?: string;
  description?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  loading?: boolean;
  reverse?: boolean;
  squared?: boolean;
  shadow?: boolean;
  style?: React.CSSProperties;
  title?: string;
};

const UserItem: React.FC<UserItemProps> = ({
  avatar = true,
  avatarUrl,
  border = true,
  color,
  description,
  disabled,
  loading,
  onClick,
  reverse,
  squared,
  shadow,
  style,
  title
}: UserItemProps) => {
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
    border: border ? '1px solid #e5e5e5' : '',
    borderRadius: squared ? '' : '8px',
    display: 'flex',
    alignItems: 'center',
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
    border: border ? '1px solid #e5e5e5' : '',
    borderRadius: squared ? '' : '8px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: reverse ? 'row-reverse' : 'row',
    boxShadow: shadow && border ? '-1px 0px 16px 0px rgba(0,0,0,0.05)' : '',
    ...style
  }} onClick={onClickItem}>
    {avatar && <div className="useritem--avatar" style={{
      backgroundColor: color,
      backgroundImage: `url(${avatarUrl})`,
      backgroundSize: "cover",
      borderRadius: squared ? '' : '100px',
    }}>
      {getInitials()}
    </div>}
    <div style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      {title && <div className="useritem--title" style={{
        textAlign: reverse ? 'right' : 'left'
      }}>{title}</div>}
      {description && <div className="useritem--description" style={{
        textAlign: reverse ? 'right' : 'left'
      }}>{description}</div>}
    </div>
  </div>
}

export default UserItem;