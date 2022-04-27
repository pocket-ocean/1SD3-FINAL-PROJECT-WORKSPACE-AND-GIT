import React from "react";
import {render, screen, within, fireEvent} from '@testing-library/react';
import AddMatch from '../components/add-match.component';
import '@testing-library/jest-dom';



//throws error, expect (recieved) to be in the document 

//This test passes!
test('Renders a heading for the user', async () => {
    render(<AddMatch/>);
    const headingElement = screen.getByText(/Add a match to this player/i);
    expect( headingElement).toBeInTheDocument();
   
});  


//This test passes!
test('Renders a button for the user', async () => {
    render(<AddMatch/>);
    const buttonElement = screen.getByRole("button");
    expect( buttonElement).toBeInTheDocument();
   
});  

// //This test passes!
// test('Test that the button submits', async () => {
//     render(<AddMatch/>);
//     const buttonElement = screen.getByRole("button");
//     fireEvent.submit()
   
// });  

//confirms that there are 4 number inputs present for the user

//this test passes!
test('checks that number inputs are present for user', async () => {
    render(<AddMatch/>);
    const numberEntries = screen.getAllByRole("spinbutton");
    expect( numberEntries.length).toBe(4);
   
});  

//this test passes!
test('confirms goals scored input row', async  () => {
    render(<AddMatch/>);
       const goalElement = screen.getByPlaceholderText(/enter number of goals scored this match/i);
       fireEvent.change(goalElement,{target:{value: 2}})
       expect(goalElement.value).toBe("2");
});

//this test passes!
test('confirms goal attempts input row', async () => {
    render(<AddMatch/>);
       const goalAttemptsElement = screen.getByPlaceholderText(/enter number of attempted goals this match/i);
       expect(goalAttemptsElement).toBeInTheDocument();
});

//this test passes!
test('confirms succesful passes input row', async () => {
    render(<AddMatch/>);
       const passElement = screen.getByPlaceholderText(/enter number of successful passes this match/i)
       expect(passElement).toBeInTheDocument();
});

//this test passes!
test('confirms pass attempts passes input row', async () => {
    render(<AddMatch/>);
       const passAttemptsElement = screen.getByPlaceholderText(/enter number of pass attempts this match/i)
       expect(passAttemptsElement).toBeInTheDocument();
});


//This test passes!
test('should empty the goal input when add match button is clicked', async  () => {
    render(<AddMatch/>);
       const goalElement = screen.getByPlaceholderText(/enter number of goals scored this match/i);
       const buttonElement = screen.getByRole("button", {name: /Add Match/i})
       fireEvent.click(buttonElement)
       expect(goalElement.value).toBe("");
});

//this test passes!
test('should empty the goal attempts input when add match button is clicked', async () => {
    render(<AddMatch/>);
       const goalAttemptsElement = screen.getByPlaceholderText(/enter number of attempted goals this match/i);
       const buttonElement = screen.getByRole("button", {name: /Add Match/i})
       fireEvent.click(buttonElement)
       expect(goalAttemptsElement.value).toBe("");
});

//this test passes!
test('should empty the passes input when add match button is clicked', async () => {
    render(<AddMatch/>);
       const passElement = screen.getByPlaceholderText(/enter number of successful passes this match/i)
       const buttonElement = screen.getByRole("button", {name: /Add Match/i})
       fireEvent.click(buttonElement)
       expect(passElement.value).toBe("");
});

//this test passes!
test('should empty the ass attempts input when add match button is clicked', async () => {
    render(<AddMatch/>);
       const passAttemptsElement = screen.getByPlaceholderText(/enter number of pass attempts this match/i)
       const buttonElement = screen.getByRole("button", {name: /Add Match/i})
       fireEvent.click(buttonElement)
       expect(passAttemptsElement.value).toBe("");
});