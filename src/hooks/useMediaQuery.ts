// Это кастомный React-хук для отслеживания соответствия экрана указанному CSS media query. Он возвращает true, если условие выполняется, и false, если нет:

//Пример: const isMobile=useMediaQuery("max-width:768px")

//(Aбдурахман , Ален , Жумадил)😀

import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (rule: string): boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(`(${rule})`);
    media.addEventListener("change", updateTarget);

    setTargetReached(media.matches);
    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, rule]);

  return targetReached;
};
export default useMediaQuery;
