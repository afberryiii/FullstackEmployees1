import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
import { faker } from "@faker-js/faker";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 15; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate(),
      salary: faker.finance.amount({ max: 500000, dec: 0 }),
    };
    await createEmployee(employee);
  }
}
