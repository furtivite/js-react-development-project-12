import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login as loginAPI } from '../../features/Auth/authAPI';

export default function LoginPage() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    return (
        <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                    setError('');
                    try {
                        const token = await loginAPI(values.username, values.password);
                        localStorage.setItem('token', token);
                        navigate('/');
                    } catch (e) {
                        setError('Invalid username or password');
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Label column sm={12}>
                                Username
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter username"
                                    disabled={isSubmitting}
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
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter password"
                                    disabled={isSubmitting}
                                />
                            </Col>
                        </Row>

                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            disabled={isSubmitting}
                        >
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
