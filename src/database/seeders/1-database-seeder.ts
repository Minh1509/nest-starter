import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { hashData, Role } from "src/common";
import { User } from "src/data-access/user";

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const email = "temporary001@email.com";
    const existingUser = await em.findOne(User, { email });

    if (existingUser) {
      return;
    }

    em.create(User, {
      email,
      password: await hashData("12345678Aa@"),
      fullName: "Nguyen Minh User",
      isActive: true,
      emailVerified: true,
      role: Role.User,
      firstName: 'Nguyen',
      lastName: 'Minh',
    });

    await em.flush();
  }
}
