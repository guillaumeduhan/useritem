## UserItem

A simple, fully customizable component for displaying your users.

![useritem](https://www.useritem.dev/boom.png)

[Website](https://dub.sh/useritem)
[Github](https://dub.sh/useritem-github) — feel free to give a star!

### Get Started

To use the UserItem component in your React/Next.js application, you can install it via npm or yarn:

```bash
npm install useritem
```

```bash
yarn add useritem
```

## React

```bash
...
import UserItem from 'useritem';

<UserItem
  title="John Doe"
  description="johndoe@mail.com"
  avatarUrl="https://example.com/avatar.jpg"
  online={true}
  status={true}
  dropdown={true}
  verified={true}
  onClick={(e) => console.log("User item clicked!", e)}
/>
```

## Next.js

```bash
...
// Next.js, only on client for now
const UserItem = dynamic(() => import("useritem"), { ssr: false });

<UserItem
  title="John Doe"
  description="johndoe@mail.com"
  avatarUrl="https://example.com/avatar.jpg"
  online={true}
  status={true}
  dropdown={true}
  verified={true}
  onClick={(e) => console.log("User item clicked!", e)}
/>
```
| Prop            | Description                                                             | Default Value | Status      |
|-----------------|-------------------------------------------------------------------------|---------------|-------------|
| `avatar`        | Set to `true` to display the avatar.                                    | `true`        | Ready       |
| `avatarUrl`     | URL of the user's avatar image.                                         |               | Ready       |
| `border`        | Set to `true` to display a border around the component.                 | `true`        | Ready       |
| `backgroundColor` | Background color of the avatar.                                       | `#FF9999`              | Ready       |
| `description`   | User description or email.                                              | `johndoe@gmail.com`              | Ready       |
| `disabled`      | Set to `true` to disable the user item.                                 | `false`              | Ready       |
| `dropdown`      | Set to `true` to enable dropdown functionality.                         | `false`              | Not Ready   |
| `infos`         | Set to `true` to display user title and description.                    | `true`        | Ready       |
| `reverse`       | Set to `true` to reverse the layout.                                    | `false`              | Ready       |
| `loading`       | Set to `true` to display a loading state.                               | `false`              | Ready       |
| `noPadding`      | Set to `false` to display a verified badge.                              | `false`              | Ready   |
| `onClick`       | Function to handle click events on the user item.                       |               | Ready       |
| `online`        | Set to `true` to indicate user is online.                               |               | Ready       |
| `shadow`        | Set to `true` to add a shadow effect.                                   | `false`        | Ready       |
| `squared`       | Set to `true` to have squared corners.                                  | `false`       | Ready       |
| `status`        | Set to `true` to display a status indicator.                            |               | Ready       |
| `style`         | Custom CSS styles for the component.                                    |               | Ready       |
| `title`         | User's name or title.                                                   | `"John Doe"`  | Ready       |
| `verified`      | Set to `true` to display a verified badge.                              |               | Not Ready   |


## License
This component is licensed under the MIT License. Feel free to use and modify it as needed for your projects.