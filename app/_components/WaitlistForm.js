'use client'

import { useState } from 'react';
import { urbanist } from '../_style/fonts'
import MainButton from '../_components/MainButton'

const INIT = 'INIT';
const SUBMITTING = 'SUBMITTING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';

const INTENT_OPTIONS = [
  { value: '', label: 'What is your biggest metal exposure? (optional)' },
  { value: 'aluminum-alloys', label: 'Aluminum alloys' },
  { value: 'titanium', label: 'Titanium' },
  { value: 'nickel-superalloys', label: 'Nickel / superalloys' },
  { value: 'steel-stainless', label: 'Steel / stainless' },
  { value: 'copper', label: 'Copper' },
  { value: 'multi-metal', label: 'Multi-metal / full BOM' },
  { value: 'other', label: 'Other / not sure yet' },
]

const formStyles = {
  id: 'cm3nq2ajn01y6t7yl8qxdn4sd',
  name: 'Default',
  formStyle: 'buttonBelow',
  placeholderText: 'you@company.com',
  buttonText: 'Get started',
  successMessage: "Request received. We'll be in touch.",
  userGroup: 'gxWebsite',
};

const domain = 'app.loops.so';

export default function SignUpFormReact() {
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState('');
  const [formState, setFormState] = useState(INIT);
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setEmail('');
    setIntent('');
    setFormState(INIT);
    setErrorMessage('');
  };

  const hasRecentSubmission = () => {
    if (typeof window === 'undefined') return false;

    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem('loops-form-timestamp');

    if (previousTimestamp && Number(previousTimestamp) + 60 * 1000 > timestamp) {
      setFormState(ERROR);
      setErrorMessage('Too many signups, please try again in a little while');
      return true;
    }

    localStorage.setItem('loops-form-timestamp', timestamp.toString());
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState !== INIT) return;
    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    const additionalFields = intent
      ? `&metalExposure=${encodeURIComponent(intent)}`
      : '';

    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}&mailingLists=`;

    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: 'POST',
      body: formBody + additionalFields,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data) => {
            setFormState(ERROR);
            setErrorMessage(data.message || res.statusText);
            if (typeof window !== 'undefined') {
              localStorage.setItem('loops-form-timestamp', '');
            }
          });
        }
      })
      .catch((error) => {
        setFormState(ERROR);
        if (error.message === 'Failed to fetch') {
          setErrorMessage('Too many signups, please try again in a little while');
        } else if (error.message) {
          setErrorMessage(error.message);
        }
        if (typeof window !== 'undefined') {
          localStorage.setItem('loops-form-timestamp', '');
        }
      });
  };

  switch (formState) {
    case SUCCESS:
      return (
        <div className="flex items-center justify-center w-full">
          <p className={`text-md lg:text-lg text-light font-thin text-success ${urbanist.className}`}>
            {formStyles.successMessage}
          </p>
        </div>
      );
    case ERROR:
      return (
        <>
          <SignUpFormError />
          <BackButton />
        </>
      );
    default:
      return (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder={formStyles.placeholderText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full bg-white text-ink border border-line rounded-md text-center py-2.5 px-4 font-light focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all ${urbanist.className}`}
          />
          <select
            name="metalExposure"
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            aria-label="Biggest metal exposure"
            className={`w-full bg-white text-ink border border-line rounded-md text-center py-2.5 px-4 font-light focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all appearance-none ${
              intent ? 'text-ink' : 'text-light'
            } ${urbanist.className}`}
          >
            {INTENT_OPTIONS.map((opt) => (
              <option key={opt.value || 'empty'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div aria-hidden="true" className="absolute left-[-2024px]" />
          <div className="mt-2">
            <SignUpFormButton />
          </div>
        </form>
      );
  }

  function SignUpFormError() {
    return (
      <div className="flex items-center justify-center w-full">
        <p className="font-sans text-error text-md">
          {errorMessage || 'Oops! Something went wrong, please try again'}
        </p>
      </div>
    );
  }

  function BackButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        type="button"
        className={`mt-8 flex items-center justify-center w-full text-light text-center font-sans text-sm my-2 mx-auto bg-transparent border-none cursor-pointer ${
          isHovered ? 'underline' : ''
        }`}
        onMouseOut={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
        onClick={resetForm}
      >
        &larr; Back
      </button>
    );
  }

  function SignUpFormButton() {
    return (
      <MainButton btn_txt={formState === SUBMITTING ? 'Please wait...' : formStyles.buttonText} />
    );
  }
}

function isValidEmail(email) {
  return /.+@.+/.test(email);
}
