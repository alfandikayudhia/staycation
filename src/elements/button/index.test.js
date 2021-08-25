import React from "react";
import { render } from "@testing-library/react";
import button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present",() =>{
    const {container} = render (<button isDisabled></button>);
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner",() =>{
    const {container, getByText} = render (<button isLoading></button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render <a> tag",() =>{
    const {container} = render (<button type="link" isExternal></button>);
    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component",() =>{
    const {container} = render (
        <Router>
            <button href=" " type="link" ></button>
        </Router>);
    expect(container.querySelector("a")).toBeInTheDocument();
});