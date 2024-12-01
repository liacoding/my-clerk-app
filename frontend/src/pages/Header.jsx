import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate(); 
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
      {/* Logo or App Name */}
      <div>
        <h1>My App</h1>
      </div>

      {/* Authentication Buttons */}
      <div>
        {/* Show User Button when signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Show Sign In and Sign Up buttons when signed out */}
        <SignedOut>
          <button onClick={() => navigate('/signin')} >Sign In</button>

          <SignUpButton>
            <button>Sign Up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
