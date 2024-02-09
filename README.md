## UserItem

A simple, fully customizable component for displaying your users.

[Website](https://dub.sh/useritem)
[Github](https://dub.sh/useritem-github) — feel free to give a star!

### Get Started

To use the UserItem component in your React application, you can install it via npm or yarn:

```bash
npm install useritem
yarn add useritem
```

Then:

```bash
...
<UserItem
        title="John Doe"
        description="johndoe@mail.com"
        avatarUrl="https://example.com/avatar.jpg"
        online={true}
        status={true}
        dropdown={true}
        verified={true}
        onClick={(e) => console.log("User item clicked!", e)}
      >
        {/* Content for dropdown */}
        <div>
          <p>Dropdown content goes here</p>
        </div>
      </UserItem>
...
```

| Prop            | Description                                                             | Default Value |
|-----------------|-------------------------------------------------------------------------|---------------|
| `avatar`        | Set to `true` to display the avatar.                                    | `true`        |
| `avatarUrl`     | URL of the user's avatar image.                                         |               |
| `border`        | Set to `true` to display a border around the component.                 | `true`        |
| `backgroundColor` | Background color of the avatar.                                       |               |
| `description`   | User description or email.                                              |               |
| `disabled`      | Set to `true` to disable the user item.                                 |               |
| `dropdown`      | Set to `true` to enable dropdown functionality.                         |               |
| `infos`         | Set to `true` to display user title and description.                    | `true`        |
| `reverse`       | Set to `true` to reverse the layout.                                    |               |
| `loading`       | Set to `true` to display a loading state.                               |               |
| `onClick`       | Function to handle click events on the user item.                       |               |
| `online`        | Set to `true` to indicate user is online.                               |               |
| `shadow`        | Set to `true` to add a shadow effect.                                   | `true`        |
| `squared`       | Set to `true` to have squared corners.                                  | `false`       |
| `status`        | Set to `true` to display a status indicator.                            |               |
| `style`         | Custom CSS styles for the component.                                    |               |
| `title`         | User's name or title.                                                   | `"John Doe"`  |
| `verified`      | Set to `true` to display a verified badge.                              |               |

## License
This component is licensed under the MIT License. Feel free to use and modify it as needed for your projects.