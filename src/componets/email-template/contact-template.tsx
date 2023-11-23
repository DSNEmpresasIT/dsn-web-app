import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  question: string;
  comments: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  question,
  comments,
}) => (
  <div className="bg-black p-8 mx-auto container">
    <h1 className="text-center">¡Hola, Soy {name}! Te hablo desde DSN Web.</h1>
    <div className="flex gap-2">
      <div className="w-1/2">Pregunta: {question}</div>
      <div className="w-1/2">Comentarios: {comments}</div>
    </div>
    <footer className="mt-4">
      <div className="text-sm">Atentamente: {name}</div>
      <div className="text-sm">Email: {email}</div>
    </footer>
  </div>
);
