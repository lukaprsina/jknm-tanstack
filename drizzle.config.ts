import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

const non_pooling_url = process.env.DATABASE_URL.replace(":6543", ":5432");

export default {
  out: "./.drizzle",
  schema: "./src/lib/server/schema/index.ts",
  breakpoints: true,
  verbose: true,
  strict: true,
  dialect: "postgresql",
  dbCredentials: {
    url: non_pooling_url,
  },
} satisfies Config;
