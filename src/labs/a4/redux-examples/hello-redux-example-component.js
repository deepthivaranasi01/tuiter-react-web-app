import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    const message = useSelector((store) => store.hello.message);
    return(
      <h1>{message}</h1>
    );
    };

export default HelloReduxExampleComponent
   