import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <Container className="text-center mt-5">
            <h1>404 - Page Not Found</h1>
            <p className="lead">The page you are looking for does not exist.</p>
            <Button as={Link} to="/" variant="primary">
                Go Home
            </Button>
        </Container>
    );
}
