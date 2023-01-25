import React, { useState, useEffect } from "react";

function BlackCircle() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (size == "10px") {
                setX(event.clientX - 5);
                setY(event.clientY - 5);
            }
            else {
                setX(event.clientX - 6);
                setY(event.clientY - 6);
            }

        };

        const handleMouseDown = () => {
            setIsMouseDown(true);
        };
        const handleMouseUp = () => {
            setIsMouseDown(false);
        };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    const size = isMouseDown ? "12px" : "10px";
    return (
        <div className="p-cursor"
            style={{
                transform: `translate(${x}px, ${y}px)`,
                width: size,
                height: size
            }}
        ></div>
    );
}

export default BlackCircle;
