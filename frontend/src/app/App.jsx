import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export default function App() {
    return (
        <BrowserRouter>
            <Container className="mt-5">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}