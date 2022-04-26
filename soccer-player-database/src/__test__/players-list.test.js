import React from "react";
import {render, screen, within} from '@testing-library/react';
import PlayersList from '../components/players-list.component';
import { BrowserRouter } from "react-router-dom";


//This test passes!
test('Renders a table for the user', async () => {
    render(<PlayersList/>);
    const tableElement = screen.getByRole("table");
    expect( tableElement).toBeInTheDocument();
   
});  

