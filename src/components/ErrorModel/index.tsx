type props = {
  error: string;
}

const ErrorModel = ({error}:props) => {
  return (
    <div className="text-red-600 bg-white rounded-md border-gray-600 border absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform w-60 h-80 flex justify-center items-center">
      {error}
    </div>
  )
}

export default ErrorModel;