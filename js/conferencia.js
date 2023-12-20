
// confere se dados iguais em tabuleiros opostos
export function conferencia(){
    if (
        (p1Position1 === p2Position1 || p1Position1 === p2Position2 || p1Position1 === p2Position3) ||
        (p1Position2 === p2Position1 || p1Position2 === p2Position2 || p1Position2 === p2Position3) ||
        (p1Position3 === p2Position1 || p1Position3 === p2Position2 || p1Position3 === p2Position3))
        {
            if (currentplayer === 1) {
            p2Position1.textContent = "";
            p2Position2.textContent = "";
            p2Position3.textContent = "";
            } else {
            p1Position1.textContent = "";
            p1Position2.textContent = "";
            p1Position3.textContent = "";
            }
        } else if (
        (p1Position4 === p2Position4 || p1Position4 === p2Position5 || p1Position4 === p2Position6) ||
        (p1Position5 === p2Position4 || p1Position5 === p2Position5 || p1Position5 === p2Position6) ||
        (p1Position6 === p2Position4 || p1Position6 === p2Position5 || p1Position6 === p2Position6)) 
        {
            if (currentplayer === 1) {
            p2Position4.textContent = "";
            p2Position5.textContent = "";
            p2Position6.textContent = "";
            } else {
            p1Position4.textContent = "";
            p1Position5.textContent = "";
            p1Position6.textContent = "";
            }
        } else if (
        (p1Position7 === p2Position7 || p1Position7 === p2Position8 || p1Position7 === p2Position9) ||
        (p1Position8 === p2Position7 || p1Position8 === p2Position8 || p1Position8 === p2Position9) ||
        (p1Position9 === p2Position7 || p1Position9 === p2Position8 || p1Position9 === p2Position9))
        {
            if (currentplayer === 1) {
            p2Position7.textContent = "";
            p2Position8.textContent = "";
            p2Position9.textContent = "";
            } else {
            p1Position7.textContent = "";
            p1Position8.textContent = "";
            p1Position9.textContent = "";
            }
        }
}