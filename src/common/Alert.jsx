import { XCircleIcon } from '@heroicons/react/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data className="bg-indigo-700 p-5 w-full rounded mb-8 ">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-base text-white font-semibold">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-white" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
