import { useState } from 'react';
import { Urbanist } from 'next/font/google'
import MainButton from '../_components/MainButton'
import SecondButton from '../_components/SecondButton'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

const INIT = 'INIT';
const SUBMITTING = 'SUBMITTING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS];

const formStyles = {
  id: 'cm3nq2ajn01y6t7yl8qxdn4sd',
  name: 'Default',
  formStyle: 'buttonBelow',
  placeholderText: 'you@example.com',
  buttonText: 'Join Waitlist',
  successMessage: "Thanks! We'll be in touch!",
  userGroup: 'gxWebsite',
};

const domain = 'app.loops.so';

export default function SignUpFormReact() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState(INIT);
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({});

  const resetForm = () => {
    setEmail('');
    setFormState(INIT);
    setErrorMessage('');
  };

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const hasRecentSubmission = () => {
    if (typeof window === 'undefined') return false;

    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem('loops-form-timestamp');

    // Indicate if the last sign up was less than a minute ago
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

    // Build additional fields
    const additionalFields = Object.entries(fields).reduce((acc, [key, val]) => {
      if (val) {
        return acc + '&' + key + '=' + encodeURIComponent(val);
      }
      return acc;
    }, '');

    // Build body
    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}&mailingLists=`;

    // API request to add user to newsletter
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

  const isInline = formStyles.formStyle === 'inline';

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
        <>
          <form
            onSubmit={handleSubmit}
            className={`flex ${isInline ? 'flex-row' : 'flex-col'} items-center justify-center w-full`}
          >
            <input
              type="text"
              name="email"
              placeholder={formStyles.placeholderText}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${isInline ? 'mr-2' : 'mb-2'
                } w-full mb-7 max-w-xs min-w-[100px] bg-bg border rounded-sm text-center x-3 py-2 px-3 font-extralight ${urbanist.className}`}
            />
            <div aria-hidden="true" className="absolute left-[-2024px]"></div>
            <SignUpFormButton/>
          </form>
        </>
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
        className={`mt-8 flex items-center justify-center w-full text-gray-500 text-center font-sans text-sm my-2 mx-auto text-center bg-transparent border-none cursor-pointer ${isHovered ? 'underline' : ''
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
      <MainButton btn_txt='Sign Up'>
        {formState === SUBMITTING ? 'Please wait...' : formStyles.buttonText}
      </MainButton>
    );
  }
}

function isValidEmail(email) {
  return /.+@.+/.test(email);
}