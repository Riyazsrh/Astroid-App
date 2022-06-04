import { render, screen } from "@testing-library/react";
import App from "../App";
import AstroidUsers from "./AstroidUsers";


test("placeHolder",()=>{
    render(<AstroidUsers/>)
    const textcheck = screen.getByPlaceholderText(/Enter Asteroid ID/i);
    expect(textcheck).toBeInTheDocument()
})

