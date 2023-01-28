import React, {useState, useRef, useEffect} from 'react'

export default function useScrollIntoView() {
    const [scrollPermit, setScrollPermit] = useState(false);

    useEffect(() => {
        setScrollPermit(true)
    }, [])

    const elementRef = useRef(null);
    const scrollIntoView = () => {
        scrollPermit && elementRef?.current.scrollIntoView();
    }
    return [elementRef, scrollIntoView]
}
