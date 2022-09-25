import { render, screen } from "@testing-library/react";

import { DateFormat, DateFormatProps } from "../date-format";

const setup = (props: DateFormatProps) => render(<DateFormat {...props} />);

describe("DateFormat", () => {
  it("shows the formatted date in spanish", () => {
    const view = setup({
      date: "Sep 24 2022",
      locale: "es",
    });

    const text = screen.queryByText(/septiembre 24, 2022/i);

    expect(text).toBeInTheDocument();

    expect(view.baseElement).toMatchSnapshot();
  });

  it("shows the formatted date in english", () => {
    const view = setup({
      date: "Sep 25 2022",
      locale: "en",
    });

    const text = screen.queryByText(/september 25, 2022/i);

    expect(text).toBeInTheDocument();

    expect(view.baseElement).toMatchSnapshot();
  });
});
