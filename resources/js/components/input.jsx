const Input = ({
    label,
    name,
    error = null,
    type = "text",
    hasBorder = true,
    ...rest
}) => {
    return (
        <div className="relative z-0 w-full mb-6">
            <input
                {...rest}
                id={name}
                type={type}
                placeholder=" "
                style={{ color: error?.length ? "red" : "" }}
                className={
                    "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0" +
                    (hasBorder
                        ? " border-0 border-b-2  focus:border-white border-gray-500"
                        : "")
                }
            />
            <label
                htmlFor={name}
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                style={{ color: error?.length ? "red" : "" }}
            >
                {label}
            </label>
            {error?.length && (
                <span className="text-orange-500 text-sm">{error[0]}</span>
            )}
        </div>
    );
};

export default Input;
