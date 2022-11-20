import { Component } from 'react';

class Cards extends Component {
  state = {
    cards: [
      {
        id: 1,
        name: '먼지',
        petNumber: 153435,
        birth: '2014년 05월 12일',
        address: '서울특별시 관악구',
        gender: '여아(중성화)',
        featurs:
          '코리안 숏헤어, 아메리칸 숏헤어 믹스. 왼쪽 뒷다리는 까만색이고 오른쪽 뒷다리에 땜빵이 있음.',
        imageUrl: null,
        guardian1: '이인지',
        guardianPhoneNum1: '010-2610-1667',
        guardian2: '이인지',
        guardianPhoneNum2: '010-2610-1667',
      },
      {
        id: 2,
        name: '요미',
        petNumber: 476487,
        birth: '2020년',
        address: '경기도 성남시',
        gender: '남아(중성화)',
        featurs: '치즈냥이',
        imageUrl: null,
        guardian1: '이인지',
        guardianPhoneNum1: '010-2610-1667',
        guardian2: '이인지',
        guardianPhoneNum2: '010-2610-1667',
      },
    ],
  };
}

export default Cards;
