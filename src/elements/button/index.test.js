import React from "react";
import { render } from "@testing-library/react";
import button from "./index";

test("Should not allowed click button if isDisable is present",() =>{
    const {container} = render (<button isDisabled></button>);
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});