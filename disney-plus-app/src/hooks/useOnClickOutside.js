import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {

    const listener = (event) => {
        // 클릭하는 곳이 modal class를 가진 요소 안 인지
        console.log(ref.current)

        console.log(event.target)

        if (!ref.current || ref.current.contains(event.target)) {
            return;
        }
        handler();
    };

    useEffect(() => {
        document.addEventListener("mousedown", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, handler])


    // ref   요소 내부를 클릭하면 handler 함수를 호출해서 모달을 닫기

}