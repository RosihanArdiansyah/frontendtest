/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import React, { useEffect } from 'react';
import PhotoView from './components/Photoview'

it('renders learn react link', () => {
  const {queryByTestId} = render(<PhotoView/>);
  expect(queryByTestId("searchButton")).toBeTruthy();
});

describe("input value",()=>{
  it("update on change", () => {
    const {queryByPlaceholderText}= render(<PhotoView/>);
    const searchInput = queryByPlaceholderText('Find something here...');

    fireEvent.change(searchInput,{target :{value:"test"}});
    expect(searchInput.value).toBe("test")
  });
});


