
const SignupSection = () => {
    return (
      <div className="flex justify-center items-center bg-yellow-400 text-white py-8 lg:my-[5%] my-10">
        <div className="text-center  lg:h-[168.57px ] lg:w-[519.5px]">
          <h2 className="text-2xl font-extrabold">JOIN SHOPPING COMMUNITY TO <br></br> GET MONTHLY PROMO</h2>
          <p className="text-lg ">Type your email down below and be part of the young, wild generation.</p>
          <form className="flex justify-center items-center relative">
            <input
              type="email"
              className="bg-white border border-gray-300 focus:border-black rounded-l-lg py-4 px-4 outline-none w-[70%]"
              placeholder="Enter your email"
            />
            <button className="bg-black text-white font-bold py-3 px-4 rounded-xl hover:bg-gray-900 ml-[-100px] left-1">Sign Up</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupSection;
  