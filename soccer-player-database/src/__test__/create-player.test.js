import React from "react";
import {render, screen, within} from '@testing-library/react'
import CreatePlayer from '../components/create-player.component'
import App from '../App';

//This test passes!
test('Renders a heading for the user', async () => {
    render(<CreatePlayer/>);
    const heading = screen.getByRole("heading");
    expect( heading).toBeInTheDocument();
   
});  

//This test passes!
test('Renders a button for the user', async () => {
    render(<CreatePlayer/>);
    const buttonElement = screen.getByRole("button");
    expect( buttonElement).toBeInTheDocument();
   
});

//This test passes!
test('Checks that all current drop down optons are present, will need to be checked when more options are added. Current option total is 7.', async () => {
    render(<CreatePlayer/>);
    const options = screen.getAllByRole("option");
    expect( options.length).toBe(7);
   
}); 

// test('Renders a textbox for the user', async () => {
//     render(<CreatePlayer/>);
//     const textbox = screen.getByRole("textbox");
//     expect( textbox).toBeInTheDocument();
   
// });  

// test('Renders a combobox for the user', async () => {
//     render(<CreatePlayer/>);
//     const combobox = screen.getAllByRole("combobox");
//     expect( combobox).toBeInTheDocument();
   
// })

