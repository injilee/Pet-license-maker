import { Component } from 'react';

class Cards extends Component {
  state = {
    cards: [
      {
        id: new Date().valueOf(),
        name: '먼지',
        petNumber: 153435,
        birth: '2014년 05월 12일',
        address: '서울특별시 관악구',
        gender: '여아(중성화)',
        featurs:
          '이마에 M 무늬가 있음. 왼쪽 뒷다리는 까만색이고 오른쪽 뒷다리에 땜빵이 있음.',
        guardian1: '이인지',
        guardianPhoneNum1: '010-2610-1667',
        guardian2: '이인지',
        guardianPhoneNum2: '010-2610-1667',
      },
    ],
  };
}

export default Cards;
