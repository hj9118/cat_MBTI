import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
const {Kakao} = window;

const KakaoShareButton = () => {
  const url = 'https://oneuleun-cat-mbti.netlify.app'
  const resultUrl = window.location.href

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("81522c980c69447be9daf07c0155957b")
  },[]);

const shareKakao = () => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '예비집사 판별기 결과',
      description: '예비 집사님이 고양이를 키운다면',
      imageUrl:
        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    
    buttons: [
      {
        title: '테스트 하러 가기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}
  return (
    <>
      <Button
        style={{ fontfamliy: 'IM_HyeMin', width: 170, marginLeft: '20px' }}
      >
        카카오톡 공유하기
      </Button>
    </>
  );
};

export default KakaoShareButton;
