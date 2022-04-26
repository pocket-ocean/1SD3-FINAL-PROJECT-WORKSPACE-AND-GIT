import React from "react";
import {render, screen, within} from '@testing-library/react'
import AddMatch from '../components/add-match.component'
import '@testing-library/jest-dom/extend-expect';


//throws error, expect (recieved) to be in the document 

//This test passes!
test('Renders a heading for the user', async () => {
    render(<AddMatch/>);
    const headingElement = screen.getByText(/Add a match to this player/i);
    expect( headingElement).toBeInTheDocument();
   
});  

//Check for button?
test('Renders a button for the user', async () => {
    render(<AddMatch/>);
    const buttonElement = screen.getByRole("button");
    expect( buttonElement).toBeInTheDocument();
   
});  

//Check for button text?