import React from "react";
import {render, screen, within} from '@testing-library/react'
import SampleDetailPlayer from '../components/detail-player.component'
import App from '../App';

//This test passes!
test('Renders a table', async () => {
    render(<SampleDetailPlayer/>);
    const tableElement = screen.getByRole("table");
    expect( tableElement).toBeInTheDocument();
   
});  

// test('Renders headers', async () => {
//     render(<SampleDetailPlayer/>);
//     const headerElement = screen.getAllByRole("heading");
//     expect( headerElement).toBeInTheDocument();
   
// }); 
