import React from "react";
import {render, screen, within} from '@testing-library/react'
import SampleDetailPlayer from '../components/detail-player.component'

//This test passes!
test('Renders a table', async () => {
    render(<SampleDetailPlayer/>);
    const tableElement = screen.getByRole("table");
    expect( tableElement).toBeInTheDocument();
   
});  


//This test passes
test('Makes sure a user can see the table element', async () => {
    render(<SampleDetailPlayer/>);
    const tableElement = screen.getByRole("table");
    expect( tableElement).toBeVisible();
   
});  

//This test passes
test('Makes sure a user can see the first row element', async () => {
    render(<SampleDetailPlayer/>);
    const firstRowElement = screen.getByTestId("1stRow");
    expect( firstRowElement).toBeVisible();
   
});  
