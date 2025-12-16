// @ts-nocheck
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  const generateRandomData = () => {
    return {
      avatarUrl: faker.image.avatar(),
      description: faker.internet.email(),
      icon: faker.datatype.boolean(),
      online: faker.datatype.boolean(),
      status: faker.datatype.boolean(),
      name: faker.person.fullName(),
      verified: faker.datatype.boolean(),
    };
  };

  return NextResponse.json(generateRandomData());
}