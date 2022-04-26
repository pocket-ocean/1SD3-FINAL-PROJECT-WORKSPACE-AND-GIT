import React from "react";
import {render, screen, within} from '@testing-library/react';
import AddMatch from '../components/add-match.component';
import '@testing-library/jest-dom';
import App from '../App';


//checks for presence of a navbar

//this test passes!
test('Renders a heading for the user', async () => {
    render(<App/>);
    const navbar = screen.getByRole("navigation");
    expect( navbar).toBeInTheDocument();
   
}); 



// test('Checks for all correct links', async () => {
//     render(<App/>);
//     const routerlinks = screen.getAllByRole("rou");
//     expect( routerlinks).toBe(4);
   
// }); 