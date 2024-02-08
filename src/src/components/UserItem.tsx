import React, { useEffect, useState } from "react";
import arrowDown from '../assets/arrowDown.svg';
import settings from '../assets/settings.svg';
import verifiedSVG from '../assets/verified.svg';
import '../styles/index.scss';

type UserItemProps = {
  avatar?: boolean;
  avatarUrl?: string;
  border?: boolean;
  children?: React.ReactNode;
  backgroundColor?: string;
  description?: string;
  disabled?: boolean;
  dropdown?: boolean;
  icon?: boolean;
  infos?: boolean;
  reverse?: boolean;
  loading?: boolean;
  online?: boolean;
  shadow?: boolean;
  squared?: boolean;
  status?: boolean;
  style?: React.CSSProperties;
  title?: string;
  verified?: boolean;
};

const UserItem: React.FC<UserItemProps> = (props) => {
  const {
    avatar = true,
    avatarUrl = "",
    border,
    children,
    backgroundColor,
    dropdown,
    disabled,
    description = "johndoe@mail.com",
    icon,
    infos = true,
    reverse,
    loading,
    online,
    shadow = false,
    squared,
    status,
    style,
    title = "John Doe",
    verified,
  } = props;
  const [open, setOpen] = useState<boolean>(false);

  const onClickItem = () => {
    if (dropdown) return setOpen(!open);
  };

  const getInitials = () => {
    if (!title) return "AA";
    const words = title.split(" ");
    const initials = words.map((word) => word[0].toUpperCase());
    return initials.join("");
  };

  useEffect(() => {
    setOpen(false);
  }, [loading]);

  return <div className="useritem">
    <button
      onClick={onClickItem}
      className={`useritem--item ${infos ? "gap-[8px]" : ""
        } ${disabled ? "useritem--disabled" : ""} ${loading ? "useritem--loading" : ""
        } ${border ? "border" : ""} ${border && shadow ? "shadow" : ""} ${squared ? "" : "rounded-[8px]"
        } ${reverse ? "flex-row-reverse" : ""}`}
      style={style}
    >
      {avatar && (
        <div className="relative">
          <div
            className={`useritem--avatar transition ease-in duration-100 ${squared ? "" : "rounded-full"}`}
            style={{
              backgroundColor: backgroundColor || "#10b981",
              backgroundImage:
                !loading && avatarUrl.length > 0 ? `url(${avatarUrl})` : "",
              backgroundSize: "cover",
            }}
          >
            {!loading && avatarUrl === "" && <span>{getInitials()}</span>}
          </div>
          {!loading && status && (
            <div
              className={`absolute ${squared ? "-bottom-1 -right-1" : "bottom-0 right-0"
                }`}
            >
              <div
                className={`${online ? "bg-green-500" : "bg-neutral-200"
                  } rounded-full h-4 w-4 border-2 border-white`}
              />
            </div>
          )}
        </div>
      )}
      {!loading && infos && (
        <div className={`flex flex-col grow truncate ${reverse ? "justify-end" : ""}`}>
          {title && (
            <div className={`flex gap-[2px] ${reverse ? "justify-end" : ""}`}>
              <p className="text-right useritem--title">{title}</p>
              {verified && <img src={verifiedSVG.src} />}
            </div>
          )}
          {description && <p className="useritem--description">{description}</p>}
        </div>
      )}
      {loading && (
        <div className="flex flex-col gap-2 grow">
          <div className="w-[160px] h-4 useritem--loading--line" />
          <div className="w-[220px] h-4 useritem--loading--line" />
        </div>
      )}
      {!loading && (
        <div className="flex items-center justify-end">
          {dropdown && !icon && <img src={arrowDown.src} />}
          {!dropdown && icon && <img src={settings.src} />}
        </div>
      )}
    </button>
    {dropdown && !loading && (
      <div
        className={`useritem--dropdown ${open
          ? "translate-y-0 z-[99] opacity-100"
          : "translate-y-[-100%] -z-[99] opacity-0"
          } ${border ? "border" : ""} ${shadow ? "shadow" : ""} ${squared ? "" : ""
          }`}
      >
        {children}
      </div>
    )}
  </div>
};

export default UserItem;
