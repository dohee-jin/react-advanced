import {create} from "zustand/react";

// 중앙 상태 저장소 생성
export const useCounterScore
    = create((set) => ({

    // 전역관리할 상태값들을 배치
    count: 99,
    showCounter: true,

}));