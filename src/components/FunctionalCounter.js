import {useCallback, useEffect, useMemo, useRef, useState} from "react";

function ItemsList({getItems}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
            setItems(getItems());
        },
        [getItems]);
    return (
        <ul>
            {items.map(
                elem =>
                    <li key={elem}>{elem}</li>
            )}
        </ul>
    );
}

export function FunctionalCounter(props) {
    function getInitialValue() {
        const [min, max] = [-5, 5];
        console.log('getInitialValue()');
        return Math.round(Math.random() * (max - min)) + min;
    }

    const [value, setValue] = useState(getInitialValue);
    const [isSelected, setSelected] = useState(false);

    function longTimeFunction(val) {
        let result = val * 2;
        for (let i = 0; i < 100000000; i++)
            result++;
        return result;
    }

    const hours = new Date().getHours();
    const longTimeValue =
        useMemo(
            () => longTimeFunction(hours),
            [hours]);

    //const [count, setCount] = useState(1);
    const count = useRef(1);
    useEffect(() => {
        count.current++;
        console.log('useEffect with null');
    });

    const getItems = useCallback(() => {
        console.log('getItems()');
        return new Array(value).fill('').map(
            (_, i) => {
                return `Елемент ${i + 1}`;
            }
        )
    }, [value]);

    useEffect(() => {
        console.log('useEffect with [] (componentDidMount)');
        return () => {
            console.log('Before component unmounting (componentWillUnmount)');
        }
    }, []);

    useEffect(() => {
        console.log('isSelected changed');
    }, [isSelected]);

    const style = {
        backgroundColor: isSelected ? 'yellow' : 'transparent',
        color: isSelected ? 'black' : 'white'
    };

    function handleIncrement() {
        setValue(
            (prevValue) => {
                if (prevValue < props.max)
                    return prevValue + 1;
                else
                    return prevValue;
            }
        );
    }

    function handleDecrement() {
        setValue(
            (prevValue) => {
                if (prevValue > props.min)
                    return prevValue - 1;
                else
                    return prevValue;
            }
        );
    }

    return (
        <>
            <div style={style} onClick={() => {
                setSelected(!isSelected);
            }}>Counter value: {value}</div>
            <div>
                <ItemsList getItems={getItems}/>
            </div>
            <div>Render count: {count.current}</div>
            <div>Long time value: {longTimeValue}</div>
            <div>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </>
    );
}

FunctionalCounter.defaultProps = {
    min: -10,
    max: 10
};