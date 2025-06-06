import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle login logic
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Sign In
                </Button>
            </Form>
        </div>
    );
}
