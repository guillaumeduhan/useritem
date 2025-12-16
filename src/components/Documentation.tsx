'use client';

import { useState } from "react";

export default function Documentation() {
  const [propsList, setPropsList] = useState([
    { prop: 'avatar', type: 'boolean', description: 'Determines whether the avatar should be displayed or not.', default: 'true' },
    { prop: 'avatarUrl', type: 'string', description: 'URL of the user\'s avatar image. Default value is a default avatar image URL.', default: '' },
    { prop: 'border', type: 'boolean', description: 'Determines whether a border should be displayed around the component.', default: 'true' },
    { prop: 'color', type: 'string', description: 'Background color of the avatar.', default: '#ccc' },
    { prop: 'description', type: 'string', description: 'User description or email.', default: 'johndoe@mailcom' },
    { prop: 'disabled', type: 'boolean', description: 'Determines whether the user item should be disabled.', default: 'false' },
    { prop: 'onClick', type: '(event: MouseEvent) => void', description: 'Function to handle click events on the user item.', default: '' },
    { prop: 'loading', type: 'boolean', description: 'Determines whether a loading state should be displayed.', default: 'false' },
    { prop: 'width', type: 'number', description: 'Width of the component.', default: '275' },
    { prop: 'online', type: 'boolean', description: 'Determines whether the user is online.', default: 'false' },
    { prop: 'reverse', type: 'boolean', description: 'Determines whether the layout should be reversed. Default value is `false`.', default: 'false' },
    { prop: 'small', type: 'boolean', description: '', default: 'false' },
    { prop: 'squared', type: 'boolean', description: 'Determines whether the corners should be squared. Default value is `false`.', default: 'false' },
    { prop: 'status', type: 'boolean', description: 'Determines whether the user is a status user.', default: 'false' },
    { prop: 'shadow', type: 'boolean', description: 'Determines whether a shadow effect should be added.', default: 'false' },
    { prop: 'style', type: 'React.CSSProperties or undefined', description: 'Custom CSS styles for the component.', default: '' },
    { prop: 'title', type: 'string', description: 'User\'s name or title. Default value is "John Doe".', default: 'John Doe' },
  ]);

  return (
    <table>
      <thead>
        <tr className="text-left">
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propsList.map((prop: any) => (
          <tr key={prop.prop}>
            <td className="text-pink-500">{prop.prop}</td>
            <td>{prop.type}</td>
            <td>{prop.default}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}