import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/Заказать звонок/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Сообщение")).toBeInTheDocument();
    expect(screen.getByAltText("ЛЕГКИЙ")).toBeInTheDocument();
  });
});
