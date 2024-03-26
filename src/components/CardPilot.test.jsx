import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import CardPilot from "./CardPilot";

describe("CardPilot", () => {
  const pilot = {
    url: "https://starwars-visualguide.com/assets/img/characters/13.jpg",
    name: "Han Solo",
  };

  it("should display the pilot's image", () => {
    render(<CardPilot pilot={pilot} />);
    const img = screen.getByAltText("Han Solo");
    expect(img).toBeInTheDocument();
  });
  it("should display the pilot's name", () => {
    render(<CardPilot pilot={pilot} />);
    const name = screen.getByText("Han Solo");
    expect(name).toBeInTheDocument();
  });
});
