import "./style.scss"

const index = ({className, children}) => {
    return (
        <button className="btn">
            {children}
        </button>
    );
};

export default index;