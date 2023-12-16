import { Navigate, Outlet } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { userStateContext } from '../contexts/ContextProvider';

export default function GuestLayout() {
  const { currentUser, userToken } = userStateContext();
  if (userToken) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <BeakerIcon className="mx-auto h-60 w-60 text-blue-500" />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
