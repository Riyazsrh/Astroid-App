import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("this is my first test case",()=>{
    test("this is first ",()=>{
        const data="Riyaz Hussain"
        expect(data).toBe("Riyaz Hussain")
    })
})
