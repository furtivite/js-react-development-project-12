import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function LoginPage() {
    return (
        <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    // Submission handling will be implemented later
                    console.log('Form values:', values);
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      /* and other goodies */
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
                                />
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit" className="w-100">
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
