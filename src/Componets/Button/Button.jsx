
import './Button.css';

function Button ({arrow, buttonStyle, loading, children, ...props} ){
    return(
       <header>
        <Button className={`button ${buttonStyle}`}>  
            {children}
        </Button>
       </header>
    );
}
export default Button;
