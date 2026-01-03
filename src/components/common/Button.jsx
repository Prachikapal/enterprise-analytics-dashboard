const Button = ({ text , loading}) => {
    return (
        <button disabled= {loading} className="w-full py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition duration-300 disabled-opacity-50">
            {loading? "Please wait...": text}
        </button>
    )
}

export default Button;