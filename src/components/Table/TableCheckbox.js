import React from 'react';

export const Checkbox = React.forwardRef(({ indermediate, ...rest} , ref) =>
{
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
        resolvedRef.current.indermediate = indermediate
    }, [resolvedRef, indermediate])
    return (
        <>
            <input type='checkbox' ref={resolvedRef} {...rest}/>
        </>
    )
})