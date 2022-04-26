import React from "react";
import {render, screen, within} from '@testing-library/react'
import SampleDetailPlayer from '../components/detail-player.component'

//This test passes!
test('Renders a table', async () => {
    render(<SampleDetailPlayer/>);
    const tableElement = screen.getByRole("table");
    expect( tableElement).toBeInTheDocument();
   
});  

