import {useSelector, useDispatch} from "react-redux";
import {actions} from "./kalkulator/kalkulator";
import {useState} from "react";

function App() {

    const dispatch                  = useDispatch();
    const display                   = useSelector((state) => state.kalkulator.display);
    const previous                  = useSelector((state) => state.kalkulator.previous);
    const record                    = useSelector((state) => state.kalkulator.record.join(""));
    const [operator, setOperator]   = useState("");

    const [setResultIn]             = useState(false);
    const [setShowResult]           = useState("");
    const setDisplayHandler = (event) => {
        setResultIn(false);
        if (display.includes(".") && event.target.value === ".") {
            return;
        }
        dispatch(actions.setDisplay(event.target.value));
        dispatch(actions.pushToRecord(event.target.value));
        dispatch(actions.setPrevious(event.target.value));
    };

    const clearHandler =() => {
        dispatch(actions.clear());
        dispatch(actions.clearRecord());
        setResultIn(false);
    };

    const setPrevAndOperate = (event) => {
        setOperator(event.target.value);

        if (event.target.value !== "-") {
            if (previous === "+" || previous === "/" || previous === "*") {
                if (operator === "+" || operator === "/" || operator === "*") {
                    dispatch(actions.popRecord());
                } else if (operator === "-") {
                    dispatch(actions.popRecord());
                    dispatch(actions.popRecord());
                }
            }
        }

        if (event.target.value === "-" && previous === "-") {
            return;
        }

        setResultIn(true);
        setShowResult(event.target.value);
        dispatch(actions.pushToRecord(event.target.value));

        if (display === "0") 
            return;
        dispatch(actions.setPrevious(display));
        dispatch(actions.clear());
        dispatch(actions.setPrevious(event.target.value));
    };

    const equal = () => {
        setResultIn(true);
        let result = eval(record);
        setShowResult(result);
        dispatch(actions.clearRecord());
        dispatch(actions.pushToRecord(result));
    };

    return (
        <div className="card">
            <div className="card-body">
                <p id="record" className="form-control">
                    {record}
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="1"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="one">
                                1
                            </button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="2"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="two">
                                2
                            </button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="3"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="three">
                                3
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="4"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="four">
                                4
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="5"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="five">
                                5
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="6"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="six">
                                6
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="7"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="seven">
                                7
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="8"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="eight">
                                8
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grid gap-2">
                            <button
                                value="9"
                                onClick={setDisplayHandler}
                                className="btn btn-dark m-1"
                                id="nine">
                                9
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="0"
                                onClick={setDisplayHandler}
                                className="btn btn-dark btn-sm m-1"
                                id="zero">
                                0
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="+"
                                onClick={setPrevAndOperate}
                                className="btn btn-sm btn-success m-1"
                                id="add">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="-"
                                onClick={setPrevAndOperate}
                                className="btn btn-sm btn-success m-1"
                                id="subtract">
                                -
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button onClick={equal} className="btn btn-sm btn-primary m-1" id="equals">
                                =
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="/"
                                onClick={setPrevAndOperate}
                                className="btn btn-sm btn-success m-1"
                                id="divide">
                                /
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="*"
                                onClick={setPrevAndOperate}
                                className="btn btn-sm btn-success m-1"
                                id="multiply">
                                *
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                value="."
                                onClick={setDisplayHandler}
                                className="btn btn-sm btn-success m-1"
                                id="decimal">
                                .
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid gap-2">
                            <button
                                onClick={clearHandler}
                                className="btn btn-blok btn-danger btn-sm m-1"
                                id="clear">
                                C
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;