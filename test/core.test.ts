import { afterEach, describe, expect, it } from "vitest";
import { getInput } from "../src/core";

const savedEnv = { ...process.env };

afterEach(() => {
  process.env = { ...savedEnv };
});

describe("core input helpers", () => {
  it("reads GitHub hyphenated input environment names", () => {
    process.env["INPUT_CONTAINER-PREFIX"] = "custom-prefix";
    delete process.env.INPUT_CONTAINER_PREFIX;

    expect(getInput("container-prefix")).toBe("custom-prefix");
  });

  it("keeps an underscore fallback for locally injected inputs", () => {
    delete process.env["INPUT_CONTAINER-PREFIX"];
    process.env.INPUT_CONTAINER_PREFIX = "legacy-prefix";

    expect(getInput("container-prefix")).toBe("legacy-prefix");
  });
});
