import React, { useState, useEffect } from "react";

function BlackCircle() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [disp, setDisp] = useState("block");
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

        // hide when mouse cursor is out of the window
        const handleMouseOut = () => {
            setDisp("none");

        };

        // show when mouse cursor is back in the window
        const handleMouseOver = () => {
            setDisp("block");

        };



        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        window.addEventListener("mouseout", handleMouseOut);

        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
    const size = isMouseDown ? "12px" : "10px";
    return (
        <div className="p-cursor"
            style={{
                transform: `translate(${x}px, ${y}px)`,
                width: size,
                height: size,
                display: disp,
                
            }}
        ></div>
    );
}

export default BlackCircle;
