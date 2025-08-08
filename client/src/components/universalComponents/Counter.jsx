import { useEffect, useState } from 'react';

const Counter = ({ targetValue, duration, className = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (targetValue === 0 || duration === 0) {
            setCount(targetValue);
            return;
        }

        const intervalTime = 10;
        const totalSteps = duration / intervalTime;
        const increment = targetValue / totalSteps;

        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                clearInterval(interval);
                setCount(targetValue);
            } else {
                setCount(Math.floor(current));
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [targetValue, duration]);

    return <p className={`text-[50px] font-bold ${className}`}>{count}</p>;
};

export default Counter;
