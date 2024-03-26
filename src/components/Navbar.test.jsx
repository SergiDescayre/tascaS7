import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";

describe("test Navbar component", () => {
  it("Sholud be text HOME  in the document", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const text = screen.getByText("HOME");
    expect(text).toBeInTheDocument();
  });
  it("Sholud be text STARSHIPS  in the document", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const text = screen.getByText("STARSHIPS");
    expect(text).toBeInTheDocument();
  });
});
