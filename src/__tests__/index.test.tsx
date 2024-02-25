import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  describe,
  test,
  beforeAll,
  afterEach,
  afterAll,
  expect,
  it,
} from "vitest";
import Home from "../pages/index";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

// Good starting point: https://testing-library.com/docs/react-testing-library/example-intro

// TODO setup your mock api here

describe("Home", () => {
  // TODO setup your tests here
});
