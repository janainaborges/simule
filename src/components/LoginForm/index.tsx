import React from 'react'

function LoginForm() {


  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-medium text-xl">Something</div>
          <div className="text-3xl font-bold text-gray-900 mt-2 text-center">another</div>
          <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form action="space-y-6" className=""></form>
            <div>
              <label htmlFor="" className="text-sm text-left font-bold text-gray-600 block">
                E-mail
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />

              <div>
                <label htmlFor="" className="text-sm text-left font-bold text-gray-600 block mt-4 ">
                  Senha
                </label>
                <input
                  type="text"
                  className="w-full  p-2 border border-gray-300 rounded mt-1 cursor-cell hover:border-rose-600 text-sm"
                />
              </div>
              <button className="bg-blue-900 p-3 mt-3 rounded-[18px] hover:bg-sky-500 active:bg-indigo-50 focus:outline-none  focus:bg-indigo-100 text-md text-neutral-100">
                Salvar
              </button>
            </div>
          </div>
        </div>
        <img src="img/login.svg" alt="login" />
      </div>
    </div>
  );
}

export default LoginForm;

