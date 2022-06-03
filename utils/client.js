import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "portfolio72",
  apiKey: process.env.API_KEY || "",
});
