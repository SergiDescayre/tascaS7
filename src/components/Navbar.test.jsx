import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";

describe("test Navbar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
      <Navbar />
    </MemoryRouter>
      );
   
  })
  it("Sholud be text HOME  in the document", () => {
    
    const text = screen.getByText("HOME");
    expect(text).toBeInTheDocument();
  });
  it("Sholud be text STARSHIPS  in the document", () => {
  
    const text = screen.getByText("STARSHIPS");
    expect(text).toBeInTheDocument();
  });
});
