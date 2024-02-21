"use client";
import React from "react";
import arrowDownSVG from "./Icons/arrowdown.svg";
import verifiedSVG from "./Icons/verified.svg";
import "./styles.css";

export type UserItemProps = {
  avatar?: boolean;
  avatarUrl?: string;
  children?: React.ReactNode,
  border?: boolean;
  backgroundColor?: string;
  description?: string;
  disabled?: boolean;
  dropdown?: boolean;
  infos?: boolean;
  reverse?: boolean;
  loading?: boolean;
  noPadding?: boolean;
  onClick?: (e: any) => void;
  online?: boolean;
  shadow?: boolean;
  squared?: boolean;
  status?: boolean;
  style?: React.CSSProperties;
  title?: string;
  verified?: boolean;
};

const UserItem: React.FC<UserItemProps> = (props: UserItemProps) => {
  const {
    avatar = true,
    avatarUrl,
    border = true,
    children,
    backgroundColor,
    dropdown,
    disabled,
    description,
    infos = true,
    reverse,
    loading,
    onClick,
    online,
    noPadding,
    shadow = false,
    squared = false,
    status,
    style,
    title = "John Doe",
    verified,
  }: UserItemProps = props;
  const [open, setOpen] = React.useState<boolean>(false);

  const onClickItem = (e: any) => {
    if (onClick) return onClick(e);
    if (dropdown) return setOpen(!open);
  };

  const getInitials = () => {
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

  return <div className={`useritem ${infos ? 'useritem--infos' : ''} ${border ? "useritem--border" : ""} ${squared ? "" : "useritem--item--border--rounded"} ${shadow ? "useritem--shadow" : ""} ${loading ? "useritem--loading--state" : ""}`}>
    <div onClick={onClickItem} className={`useritem--item ${disabled ? "useritem--disabled" : ""} ${reverse ? "useritem--item--reverse" : ""}`} style={{
      ...{
        height: noPadding ? 'auto' : '64px',
        padding: noPadding ? 0 : '2px 10px',
      },
      ...style
    }}>
      {avatar && <div className="relative">
        <div
          className={`useritem--avatar ${loading ? "useritem--loading" : ""}`}
          style={{
            backgroundColor: loading ? "lightgray" : avatarUrl ? 'transparent' : backgroundColor || "#10b981",
            backgroundImage:
              !loading && avatarUrl && avatarUrl.length > 0 ? `url(${avatarUrl})` : "",
            backgroundSize: "cover",
            borderRadius: squared ? "" : "32px"
          }}
        >
          {!loading && !avatarUrl && <span>{getInitials()}</span>}
        </div>
        {!loading && status && <div className={`useritem--item--status ${squared ? "useritem--item--status--squared" : ""} ${online ? "useritem--item--status--online" : ""}`} />}
      </div>}
      {loading && <div style={{ display: "grid", gap: "8px" }}>
        <div className="useritem--loading" style={{ width: "120px", height: "16px", background: "lightgray" }} />
        <div className="useritem--loading" style={{ width: "180px", height: "16px", background: "lightgray" }} />
      </div>}
      {!loading && infos && <div className={`useritem--infos truncate`}>
        {title && (<div className={`useritem--infos--title`}>
          <div className={`w-full ${reverse ? "text-right" : "text-left"}`} style={{ display: "flex", alignItems: "center", gap: "2px" }}>{title} {verified && <img src={verifiedSVG} alt="" />}</div>
        </div>
        )}
        {description && <div className={`truncate useritem--infos--description  ${reverse ? "text-right" : "text-left"}`}>{description}</div>}
      </div>}
      {!loading && dropdown && <div>
        <img src={arrowDownSVG} alt="dropdown arrow down" style={{ rotate: open && dropdown ? '180deg' : '', transition: 'ease-in', transitionDuration: '100ms' }} />
      </div>}
    </div>
    {/* {dropdown && !loading && children && (
      <div
        className={`useritem--dropdown ${open ? "useritem--dropdown--open" : "useritem--dropdown--closed"} ${border ? "useritem--border" : ""} ${squared ? "" : "useritem--item--border--rounded"}`}
        style={{
          borderRadius: squared ? "0px" : "0px",
          borderTopRightRadius: squared ? "0px" : "0px",
          borderTopLeftRadius: squared ? "0px" : "0px",
        }}
      >
        {children}
      </div>
    )} */}
  </div>
};

export default UserItem;
