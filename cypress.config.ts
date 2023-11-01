import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1800,
  viewportHeight: 1300,
  e2e: {
    baseUrl: "http://localhost:5173/",
  },
});
