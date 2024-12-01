import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return ( <div>
        <h1>Sign Up</h1>
        <p>Please sign up to access this page.</p>

        <SignUp
        path="/signup" // in what path this elemnt will appear
        routing="path" // configuration of the path to be without #
        signInUrl="/signin" // Redirect to sign-in page for already registered users
       fallbackRedirectUrl="/protected" // Redirect after successful sign-up
      />

    </div>)
}

export default SignUpPage;