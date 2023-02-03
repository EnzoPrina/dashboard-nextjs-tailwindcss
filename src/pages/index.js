export default function Home() {
  return (
    <div>
      <div className="hero min-h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-extrabold text-white">Bienvenido !</h1>
            <p className="py-6 mr-16 text-white">Inicie sesion para ingresar en Dashboard YardSale. <br/> Si no tienes una cuenta, registrate gratis!</p>
            <button className="btn btn-primary font-bold">
              <a href="/login" /* className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" */>Log in</a>
            </button> {'    '}
            <a href="/login" className="pl-2 text-white font-extralight text-sm">{' '}Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
