import { useState } from 'react';
import { Urbanist } from 'next/font/google';
import MainButton from '../_components/MainButton';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});

const FORM_STATES = {
  INIT: 'INIT',
  SUBMITTING: 'SUBMITTING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const formConfig = {
  id: 'cm3nq2ajn01y6t7yl8qxdn4sd',
  name: 'Interest Form',
  placeholderText: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    company: 'Company Name',
    role: 'Your Role/Title',
  },
  buttonText: 'Join Waitlist',
  successMessage: "Thanks for signing up! We'll be in touch soon.",
  userGroup: 'gxWaitlistInterest',
  domain: 'app.loops.so',
};

export default function FullForm() {
  const [formState, setFormState] = useState(FORM_STATES.INIT);
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
  });

  const resetForm = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
    });
    setFormState(FORM_STATES.INIT);
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formState !== FORM_STATES.INIT) return;

    if (!isValidEmail(fields.email)) {
      setFormState(FORM_STATES.ERROR);
      setErrorMessage('Please enter a valid email');
      return;
    }

    setFormState(FORM_STATES.SUBMITTING);

    const formBody = Object.entries(fields)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');

    const requestBody = `userGroup=${encodeURIComponent(
      formConfig.userGroup
    )}&${formBody}`;

    try {
      const response = await fetch(
        `https://${formConfig.domain}/api/newsletter-form/${formConfig.id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: requestBody,
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || response.statusText);
      }

      resetForm();
      setFormState(FORM_STATES.SUCCESS);
    } catch (error) {
      setFormState(FORM_STATES.ERROR);
      setErrorMessage(
        error.message === 'Failed to fetch'
          ? 'Too many signups, please try again in a little while'
          : error.message || 'Unknown error occurred'
      );
    }
  };

  const renderForm = () => (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-center justify-center w-full"
    >
      {Object.keys(fields).map((field) => (
        <>
          <input
            key={field}
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={formConfig.placeholderText[field]}
            value={fields[field]}
            onChange={handleInputChange}
            required
            className={`w-full mb-7 max-w-md min-w-[100px] bg-bg border border-gray-300 rounded-sm px-3 py-2 font-extralight ${urbanist.className}`}
            autoComplete="off"
          />
        </>
      ))}
      <MainButton btn_txt={formConfig.buttonText}>
        {formState === FORM_STATES.SUBMITTING ? 'Please wait...' : formConfig.buttonText}
      </MainButton>
    </form>
  );

  const renderMessage = (message, styleClass) => (
    <div className="flex items-center justify-center w-full">
      <p className={`text-md lg:text-lg font-thin ${styleClass} ${urbanist.className}`}>
        {message}
      </p>
    </div>
  );

  switch (formState) {
    case FORM_STATES.SUCCESS:
      return renderMessage(formConfig.successMessage, 'text-success');
    case FORM_STATES.ERROR:
      return renderMessage(errorMessage || 'Oops! Something went wrong, please try again', 'text-error');
    default:
      return renderForm();
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}