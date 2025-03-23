// Type definitions for Jest

import * as Jest from "@jest/globals";

declare global {
  const jest: typeof Jest.jest;
  namespace jest {
    // Re-export all the types from Jest namespace
    export import Matchers = Jest.jest.Matchers;
    export import Mock = Jest.jest.Mock;
    export import MockInstance = Jest.jest.MockInstance;
    export import SpyInstance = Jest.jest.SpyInstance;
    export import fn = Jest.jest.fn;
    export import spyOn = Jest.jest.spyOn;
    export import mocked = Jest.jest.mocked;
  }
}
