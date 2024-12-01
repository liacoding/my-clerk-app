
import { SignIn } from '@clerk/clerk-react';


const SignInPage = () => {
    return ( <div>
        <h1>Sign In</h1>
        <p>Please sign in to access this page.</p>
        <SignIn path="/signin" routing="path" signUpUrl="/signup"  fallbackRedirectUrl="/protected" />

    </div>)
}

export default SignInPage;