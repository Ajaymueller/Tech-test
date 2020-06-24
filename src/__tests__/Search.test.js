import React from 'react';
import Search from '../components/Search';
import { render } from "@testing-library/react";

describe("search", () => {
    const { asFragment } = render(<Search />);

    it("renders correctly", () => {
        expect(asFragment).toMatchSnapshot();
    });
});
