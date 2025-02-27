import React from "react";

export default function Impressum() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1>Impressum</h1>
      <h3>Angaben gemäß § 5 TMG</h3>
      <p>
        <strong>Name des Unternehmens:</strong> KanzleiCopilot
      </p>
      <p>
        <strong>Vertreten durch:</strong> Max Mustermann (Geschäftsführer)
      </p>
      <p>
        <strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt, Deutschland
      </p>
      <p>
        <strong>Telefonnummer:</strong> +49 123 4567890
      </p>
      <p>
        <strong>E-Mail-Adresse:</strong> info@kanzleicopilot.de
      </p>
      <p>
        <strong>Handelsregister:</strong> HRB 123456, Amtsgericht Musterstadt
      </p>
      <p>
        <strong>Umsatzsteuer-Identifikationsnummer:</strong> DE123456789
      </p>
      <p>
        <strong>Wirtschafts-Identifikationsnummer:</strong> 1234567890
      </p>
      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>{" "}
        Max Mustermann (Anschrift wie oben)
      </p>
    </div>
  );
}
