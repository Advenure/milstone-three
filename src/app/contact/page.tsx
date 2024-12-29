export default function contact(){
    return(
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Contact us</h1>
      <form className="mt-8 space-y-4">
        <input type='text' placeholder='Name'
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
        <input type='email' placeholder='Email'
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
        <input type='text' placeholder='Subject'
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
       
         <button className="text-white bg-blue-600 rounded-lg font-bold text-xl hover:bg-blue-900  px-4 py-2.5 w-full outline-none">Send</button>
      </form>
    </div>
    )
}