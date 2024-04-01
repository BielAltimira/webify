import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({className, href, onClick, children, px, white, type}) => {
    const classes = `button relative inline-flex items-center justify-center font-open h-11 transition-colors hover:text-gray-400 ${px || "px-7"} ${white ? "rounded-xl bg-white !text-n-8" : "text-n-1"} ${className || ""}`
    const spanClasses = "relative z-10"
    type = type || "button";
    const renderButton = () => (
        <button className={classes} onClick={onClick} type={type}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)} 
        </a>
    );

    return href
        ? renderLink()
        : renderButton();
};

export default Button;