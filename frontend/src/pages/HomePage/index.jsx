import React from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../../shared/assets/react.svg';

export default function HomePage() {
  return (
    <div className="text-center">
      <Image src={logo} alt="React Logo" width="120" className="mb-4" />
      <h1 className="mb-3">Welcome to Hexlet Chat</h1>
      <p className="lead mb-4">
        This is a React + Vite chat application scaffolded under FSD.
      </p>
      <Button variant="primary" onClick={() => alert('Button clicked')}>
        Start Chat
      </Button>
    </div>
  );
}
