// setupTests.ts
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// Extend the `expect` function with Jest DOM matchers
expect.extend(matchers);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});
