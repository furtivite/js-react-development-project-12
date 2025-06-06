import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: добавить логику авторизации
        alert(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Label column sm={12}>
                        Username
                    </Form.Label>
                    <Col sm={12}>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={12}>
                        Password
                    </Form.Label>
                    <Col sm={12}>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className="w-100">
                    Sign In
                </Button>
            </Form>
        </div>
    );
}
